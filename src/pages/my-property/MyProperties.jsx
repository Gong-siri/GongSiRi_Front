import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import PropertyCard from './PropertyCard';
//import myProperties from '../../__fixtures__/myProperties';
import { HeaderText } from '../../constants/styles/commonCSS';
import DropDown from '../../components/DropDown';
import { getProperties, getSellProperties } from '../../api/main';
import { getRealty } from '../../api/realty';
import { useContext, useEffect, useState, useReducer } from 'react';
import { REALTY_ACTION_TYPE } from '../../constant/realtyConstant';

export default function MyProperties() {
  const initialState = [];
  const propertyStatusOptions = ['전체매물', '임대중매물', '공실매물'];
  const [pro, setPro] = useState();

  const navigate = useNavigate();

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

  const [realty, dispatch] = useReducer(reducer, initialState);
  const fetchRealtyList = async () => {
    // e.preventDefaul();
    const res = await getRealty();
    if (res) dispatch({ type: REALTY_ACTION_TYPE.GET, realty: res.data });
    console.log(res.data);
    //setPro(res.data);
    alert('API 성공');
  };
  useEffect(() => {
    fetchRealtyList();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <HeaderText>나의 매물</HeaderText>
        <DropDown options={propertyStatusOptions} />
        <S.Button
          onClick={() => {
            navigate('/realty');
          }}
        >
          <img src="/images/icons/icon-plus-mono.svg" alt="plus" />
          매물 업데이트
        </S.Button>
      </S.Header>
      <S.Flex>
        {realty.map((realty, index) => (
          // pro 로 수정 (api 호출시)

          <PropertyCard realty={realty} key={realty.id} />
        ))}
      </S.Flex>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;
    padding-bottom: 31px;
    label: MyProperty__Container;
  `,
  Header: styled.div`
    width: 100%;
    padding: 12px 0;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
    label: MyProperty__Header;
  `,
  Button: styled.button`
    display: flex;
    width: 141px;
    height: 40px;
    border-radius: 10px;
    padding: 0 13px;
    margin-left: auto;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    border: none;
    background-color: #11b7e4;
    cursor: pointer;
    &:hover {
      background-color: #0a9ec7;
    }
    label: MyProperty__Button;
  `,
  Flex: styled.div`
    display: flex;
    justify-content: start;
    height: fit-content;
    overflow: hidden;
    gap: 13px;
    label: MyProperty__Flex;
  `,
};
