import styled from '@emotion/styled';
import { border } from '../../constants/styles/commonCSS';
import ContractBar from '../../components/ContractBar';

// ContractsInProgress와 비슷한 방식으로 NewContracts 컴포넌트 정의 후 UI 반환
export default function NewContracts({contracts}) {
  return (
    <S.Container>
      {
        contracts.map((contract, index) => (
        <ContractBar contract={contract} />
      ))
      }
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    width: 442px;
    height: 124px;
    padding: 27px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: start;
    ${border}
  `,
};
