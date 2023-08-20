import NewContracts from './NewContracts';
import ContractsInProgress from './ContractsInProgress';
import styled from '@emotion/styled';
import { HeaderText } from '../../constants/styles/commonCSS';
import contracts from '../../__fixtures__/contracts';

// RentalContractProgress 컴포넌트 정의
export default function RentalContractProgress() {
  // 새로운 계약
  const newContracts = contracts.filter(contract => contract.status === 'new');
  // 진행중인 계약
  const contractsInProgress = contracts.filter(contract => contract.status !== 'new');

  return (
    <S.Container>
      <HeaderText>
        임대계약 진행 상황
      </HeaderText>
      {/* 랜더링 */}
      <NewContracts contracts={newContracts} />
      <ContractsInProgress contracts={contractsInProgress}/>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    label: RentalContractProgress__Container;
  `,
};
