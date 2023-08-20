import styled from "@emotion/styled";
import { useState } from 'react';
// import { border } from "../../constants/styles/commonCSS";
import { border } from "../constants/styles/commonCSS";

export default function ModeSelector() {
  const [mode, setMode] = useState('매물관리'); // 처음엔 매물관리 

  return (
    <S.Container>
      {/* 매물관리 button */}
      <S.ModeButton 
        isLeft={true}
        isSelected={mode === '매물관리'} 
        onClick={() => setMode('매물관리')}
      >
        매물관리
      </S.ModeButton>
      {/* 시세분석 button */}
      <S.ModeButton 
        isLeft={false}
        isSelected={mode === '시세분석'} 
        onClick={() => setMode('시세분석')}
      >
        시세분석
      </S.ModeButton>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    width: 160px;
    height: 30px;
    background-color: #CDCDCD;
    border-radius: 999px;
    font-size: 15px;
    font-weight: 700;
    border: 2px solid #E9E9E9;
    color: #818181;
    label: ModeSelector__Container;
  `,
  ModeButton: styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: ${props => (props.isSelected ? '30px' : '26px')};
    top: 0;
    left: ${props => (props.isLeft ? '0' : 'auto')};
    right: ${props => (props.isLeft ? 'auto' : '0')};
    transform: ${props => (props.isLeft ? 'translate(-2px, -2px)' : 'translate(2px, -2px)')};
    background-color: ${props => (props.isSelected ? '#ffffff' : '#CDCDCD')};
    color: ${props => (props.isSelected ? '#818181' : '#ffffff')};
    box-shadow: ${props => props.isSelected && (props.isLeft ? '3px 0px 5px rgba(0, 0, 0, 0.1)' : '-3px 0px 5px rgba(0, 0, 0, 0.1)')};
    ${border}
    border-radius: 999px;
    z-index: ${props => props.isSelected && '1'};
    border-color: ${props => (props.isSelected ? '#E9E9E9' : 'transparent')}; // 버튼의 테두리를 배경색으로 설정
    transform: ${props => !props.isSelected && 'translate(0, 0)'};
    cursor: pointer;
    label: ModeSelector__ModeButton;
  `,
};
