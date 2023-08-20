import { useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Heading from '../components/common/Heading';
import { REALTY_ACTION_TYPE } from '../constant/realtyConstant';
import { getRealty } from '../api/realty';
import Lists from '../components/realty/Lists';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case REALTY_ACTION_TYPE.GET:
      return [...action.realty];

    case REALTY_ACTION_TYPE.UPDATE:
      return state.map((realty) =>
        realty.id === action.id ? { ...action.realty } : realty,
      );
    // case Realty_ACTION_TYPE.POST:
    //   return [...state, action.realty];

    // case Realty_ACTION_TYPE.DELETE:
    //   return state.filter((realty) => realty.id !== action.id);

    default:
      return state;
  }
};

const Realty = () => {
  const navigate = useNavigate();
  const [realty, dispatch] = useReducer(reducer, initialState);

  const fetchRealtyList = async () => {
    const res = await getRealty();
    if (res) dispatch({ type: REALTY_ACTION_TYPE.GET, realty: res.data });
  };

  useEffect(() => {
    fetchRealtyList();
  }, []);

  return (
    <SelectedWrraper>
      <Header>
        <Heading title={'김공실님 소유의 부동산을 찾았어요!'} />
        <Heading title={'공실이에서 관리할 부동산을 선택해주세요'} />
      </Header>
      <Lists realty={realty} realtyDispatch={dispatch} />
      <Button
        type="button"
        onClick={() => {
          navigate('/main');
        }}
      >
        매물 등록 완료
      </Button>
    </SelectedWrraper>
  );
};

const SelectedWrraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 화면 높이에 맞게 중앙 정렬 */
`;

// const HeadingContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Heading = styled.h1`
//   font-size: 24px;
//   margin: 8px 0; /* 위아래 여백을 추가하여 줄바꿈을 만듭니다. */
// `;

const Header = styled.header`
  //display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export default Realty;
