//import { useState } from 'react';
import styled from 'styled-components';
import { REALTY_ACTION_TYPE } from '../../constant/realtyConstant';
import { updateRealty } from '../../api/realty';

const List = ({ realty: { id, name, pinned }, realtyDispatch }) => {
  //const [isSelected, setIsSelected] = useState(false);

  const handleCheckBox = async (id, name, pinned) => {
    const res = await updateRealty(id, name, !pinned);
    console.log(res);
    if (res.status === 200) {
      realtyDispatch({
        type: REALTY_ACTION_TYPE.UPDATE,
        id,
        name: res.data,
      });
    }
  };

  return (
    <RealtyList>
      <img src="/asserts/Realty/Home.png" alt="home" />
      <CheckInputWrapper>
        <input
          type="checkbox"
          checked={pinned}
          onChange={() => handleCheckBox(id, name, pinned)}
        />
        <RealtyTitle pinned={pinned}>{name}</RealtyTitle>
      </CheckInputWrapper>
    </RealtyList>
  );
};

const RealtyList = styled.li`
  width: 85%;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background-color: #f3f4f6;
  color: #4b5563;
  margin-bottom: 35px;
  margin-right: 211px;
`;

const CheckInputWrapper = styled.div`
  max-size: 80px
  display: flex;
  align-items: center;
  gap: 20px;

  input[type='checkbox'] {
    cursor: pointer;
    width: 60px;
    height: 16px;
    border: 2px solid #9ca3af;
    border-radius: 2px;
  }
`;

const RealtyTitle = styled.span`
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? 'line-through' : 'none'};
`;

const TextInput = styled.input`
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #9ca3af;
  color: #4b5563;
  font-size: 16px;
  width: 80%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Button = styled.button`
  padding: 8px;
  font-size: 16px;
`;

export default List;
