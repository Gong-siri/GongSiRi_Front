import styled from "@emotion/styled";
import { dateToYYYYMMDD } from "../../utils/utils";

export default function RentalDate({text, date}) {
  return (
    <S.Container>
      {/* 텍스트 컨테이너 */}
      <S.TextContainer>
        {text}
      </S.TextContainer>
      |
      {/* 날짜 컨테이너 */}
      <S.DateContainer>
        {dateToYYYYMMDD(date)}
      </S.DateContainer>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    gap: 7px;
    color: #8B95A1;
    font-size: 11px;
    font-weight: 700;
    label: RentalDate__Container;
  `,
  TextContainer: styled.div`
    label: RentalDate__TextContainer;
  `,
  DateContainer: styled.div`
  `,
};
