import { useContext, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Heading from '../components/common/Heading';
import { REALTY_ACTION_TYPE } from '../constant/realtyConstant';
import { authContext, AUTH_ACTION } from '../context/AuthProvider';
import { getRealty } from '../api/realty';
import Lists from '../components/realty/Lists';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case REALTY_ACTION_TYPE.GET:
      return [...action.realty];
    // case Realty_ACTION_TYPE.POST:
    //   return [...state, action.realty];
    // case Realty_ACTION_TYPE.UPDATE:
    //   return state.map((realty) =>
    //     realty.id === action.id ? { ...action.realty } : realty,
    //   );
    // case Realty_ACTION_TYPE.DELETE:
    //   return state.filter((realty) => realty.id !== action.id);

    default:
      return state;
  }
};

const Realty = () => {
  const [realty, dispatch] = useReducer(reducer, initialState);

  const fetchRealtyList = async () => {
    const res = await getRealty();
    if (res) dispatch({ type: REALTY_ACTION_TYPE.GET, realty: res.data });
  };

  useEffect(() => {
    fetchRealtyList();
  }, []);

  const { dispatch: authDispatch } = useContext(authContext);

  const handleClickLogOut = () => {
    authDispatch({
      type: AUTH_ACTION.RESET_TOKEN,
    });
  };

  return (
    <div>
      <Header>
        <Heading title="Realty" />
        <Button type="button" onClick={handleClickLogOut}>
          로그아웃
        </Button>
      </Header>
      <Lists realty={realty} realtyDispatch={dispatch} />
    </div>
  );
};

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export default Realty;
