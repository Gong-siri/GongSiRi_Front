import styled from '@emotion/styled';
import Header from './Header';
import RentalContractProgress from './rental-contract-progress/RentalContractProgress';
import RentalStatus from './rental-status/RentalStatus';
import MyProperties from './my-property/MyProperties';

export default function Main() {
  return (
    <S.Container>
      {/* 상단 헤더 */}
      <S.Logo>
        <img src="/images/icons/gongsiri.png" alt="gongsiri"></img>
      </S.Logo>
      <Header />
      <S.Flex>
        {/* 임대계약 진행 상황*/}
        <RentalContractProgress />
        {/* 임대 현황*/}
        <RentalStatus />
      </S.Flex>
      {/* 나의 매물 */}
      <MyProperties />
    </S.Container >
  );
};

const S = {
  Container: styled.div`
    max-width: 1200px;
    margin: 0 100px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    label: Main__Container;
  `,
  Flex: styled.div`
    display: flex;
    justify-content: space-between;
    label: Main__Flex;
  `,
  Logo: styled.div`
    position: absolute;
    top: 38px; 
    transform: translateX(780%);
    width: 119.69px;
    height: 25.54px;
  `,
}
