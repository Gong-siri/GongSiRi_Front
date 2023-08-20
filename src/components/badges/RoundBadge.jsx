import styled from "@emotion/styled";

export default function RoundBadge({text, color="#ffffff", borderColor="#11B7E4", backgroundColor="transparent"}) {
  return (
    <S.Container 
      color={color} 
      borderColor={borderColor} 
      backgroundColor={backgroundColor}
    >
      {text}
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 6px;
    height: 26px;
    border-radius: 999px;
    border: 1px solid ${props => props.borderColor};
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    font-size: 15px;
    font-weight: 700;
    text-align: center;
  `,
};
