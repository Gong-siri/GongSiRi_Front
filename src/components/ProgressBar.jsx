import styled from "@emotion/styled";

export default function ProgressBar({point=50}) {
  return (
    <S.Container>
      <S.Bar point={point}>
        <S.TextContainer>
          {point}%
        </S.TextContainer>
      </S.Bar>
      <S.Background />
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 20px;
    label: ProgressBar__Container;
  `,
  Bar: styled.div`
    position: absolute;
    display: flex;             // flex display를 추가
    justify-content: center;   // 내용을 가로로 중앙에 배치
    align-items: center;       // 내용을 세로로 중앙에 배치
    border-radius: 3px;
    width: ${props => `${props.point}%`};
    background-color: ${props => {
      if (props.point < 20) {
        return '#FF4487';
      } else if (props.point < 50) {
        return '#FFC400';
      } else if (props.point < 80) {
        return '#11B7E4';
      } else {
        return '#A2CC8E';
      }
    }};
    height: 20px;
    label: ProgressBar__Bar;
  `,
  TextContainer: styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 700;
    position: absolute;
    label: ProgressBar__TextContainer;
  `,
  Background: styled.div`
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background-color: #E0E0E0;
    label: ProgressBar__Background;
  `,
};
