import { useState } from 'react';
import styled from '@emotion/styled';
import { lightBorder } from '../constants/styles/commonCSS';

export default function DropDown({options}) {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [openOptions, setOpenOptions] = useState(false);

  // 드롭다운 옵션 (열고 닫기)
  const handleClickOpenOptions = () => {
    setOpenOptions(!openOptions);
  };
  // 옵셥 선택
  const handleClickOption = (option) => {
    setSelectedOption(option);
    setOpenOptions(false);
  };
  // 선택되지 않은 옵션
  const restOptions = options.filter(option => option !== selectedOption);

  return (
    <S.Container open={openOptions}>
      <S.TextContainer onClick={handleClickOpenOptions}>
        {selectedOption}
        <S.IconContainer>
          <img src="/images/icons/down-arrow.png" alt="arrow-down" />
        </S.IconContainer>
      </S.TextContainer>
      {openOptions && (
        <S.OptionsContainer>
          {
            restOptions.map((option, index) => (
              <S.Option
                key={index}
                isLast={index === restOptions.length - 1}
                onClick={() => handleClickOption(option)}
              >
                {option}
              </S.Option>
            ))
          }
        </S.OptionsContainer>
      )}
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    background-color: #ffffff;
    position: relative;
    width: 106px;
    min-width: 60px;
    height: 40px;
    padding: 10px 9px;
    ${lightBorder}
    border-radius: ${props => (props.open ? '10px 10px 0 0' : '10px')};
    label: DropDown__Container;
  `,
  TextContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #818181;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    label: DropDown__TextContainer;
  `,
  IconContainer: styled.div`
    label: DropDown__IconContainer;
  `,
   OptionsContainer: styled.div`
    width: 106px;
    position: absolute;
    top: 100%;
    left: -1px;
    right: 0;
    z-index: 1;
    border-radius: 0 0 10px 10px;
    label: DropDown__OptionsContainer;
    `,
 Option: styled.div`
    padding: 10px 9px;
    background-color: #f5f5f5;
    color: #818181;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    text-align: start;
    height: 40px;
    ${lightBorder}
    border-radius: ${props => (props.isLast ? '0 0 10px 10px' : '0')};
    &:hover {
      background-color: #e3e3e3;
    }
    label: DropDown__Option;
 `
};
