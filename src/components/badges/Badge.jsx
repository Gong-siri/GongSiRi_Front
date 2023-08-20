import styled from "@emotion/styled";

export default function Badge({text, color="#ffffff", borderColor="#11B7E4", backgroundColor="transparent"}) {
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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 8px;
    width: fit-content;
    height: 30px;
    border-radius: 10px;
    border: 2px solid ${props => props.borderColor};
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    font-size: 15px;
    font-weight: 700;
    text-align: center;
  `,
};
