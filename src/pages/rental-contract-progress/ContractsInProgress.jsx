import styled from "@emotion/styled";
import { border } from "../../constants/styles/commonCSS";
import ContractBar from "../../components/ContractBar";

// ContractsInProgress 컴포넌트 정의
export default function ContractsInProgress({contracts}) {
  // UI 반환
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
    height: 234px;
    padding: 27px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: start;
    ${border}
  `,
};
