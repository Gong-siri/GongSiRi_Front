import styled from '@emotion/styled';
import DropDown from '../../components/DropDown';
import { HeaderText, border } from '../../constants/styles/commonCSS';
import rentalStatusItems from '../../__fixtures__/rentalStatusItems';
import RentalStatusCard from './RentalStatusCard';

export default function RentalStatus() {
  const rentalStatusOrders = ['만료임박순', '최신계약순'];
  return (
    <S.Container>
      {/* 상단 헤더 */}
      <S.Flex>
        <HeaderText>임대현황</HeaderText>
        {/* DropDown 컴포넌트 */}
        <S.DropDownContainer>
          <DropDown options={rentalStatusOrders} />
        </S.DropDownContainer>
      </S.Flex>

      {/* 임대현황 아이템 목록 */}
      <S.StatusList>
        {rentalStatusItems.map((item, index) => (
          <S.StatusListItem>
            <S.Line />
            <S.Circle />
            <S.CardContainer>
              <RentalStatusCard item={item} />
            </S.CardContainer>
          </S.StatusListItem>
        ))}
      </S.StatusList>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
    label: RentalStatus__Container;
  `,
  Flex: styled.div`
    display: flex;
    gap: 20px;
    label: RentalStatus__Flex;
  `,
  DropDownContainer: styled.div`
    display: flex;
    align-items: center;
    label: RentalStatus__DropDownContainer;
  `,
  StatusList: styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 13px 4px 19.5px;
    width: 625px;
    height: 371px;
    overflow-y: auto;
    background-color: #fafafa;
    ${border}
    label: RentalStatus__StatusList;
  `,
  StatusListItem: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 16.5px;
    :first-child {
      margin-top: 4px;
    }
    :last-child {
      margin-bottom: 4px;
    }
    label: RentalStatus__StatusListItem;
  `,
  Line: styled.div`
    width: 2px;
    height: 100%;
    background-color: #e9e9e9;
    label: RentalStatus__Line;
  `,
  Circle: styled.div`
    position: absolute;
    width: 15px;
    height: 15px;
    border: 2px solid #e9e9e9;
    left: -6.5px;
    border-radius: 999px;
    background-color: #cbecff;
    label: RentalStatus__Circle;
  `,
  CardContainer: styled.div`
    padding: 4px 0;
    width: 573px;
    label: RentalStatus__CardContainer;
  `,
};
