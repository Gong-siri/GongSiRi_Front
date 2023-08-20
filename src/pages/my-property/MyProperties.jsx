import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import PropertyCard from './PropertyCard';
//import myProperties from '../../__fixtures__/myProperties';
import { HeaderText } from '../../constants/styles/commonCSS';
import DropDown from '../../components/DropDown';
import { getPinnedRealty } from '../../api/realty';
import { useContext, useEffect, useState, useReducer } from 'react';
import { REALTY_ACTION_TYPE } from '../../constant/realtyConstant';

export default function MyProperties() {
  const initialState = [];
  const propertyStatusOptions = ['전체매물', '임대중매물', '공실매물'];

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
    console.log('핀 체크 리스트 디버깅');
    const res = await getPinnedRealty();
    if (res) dispatch({ type: REALTY_ACTION_TYPE.GET, realty: res.data });
    //setPro(res.data);
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
          // <div key={realty.id}><PropertyCard realty={realty}/></div>
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
    width: 145px;
    height: 45px;
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
    flex-wrap: wrap; /* 아이템이 가로로 넘칠 경우 줄 바꿈 */
    /* 아이템 크기를 조절 */
    > * {
      flex-basis: calc(
        25% - 13px
      ); /* 3개의 아이템을 가로로 정렬하려면 25%로 설정 */
    }
    gap: 13px;
    label: MyProperty__Flex;
  `,
};
