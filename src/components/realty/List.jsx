import { useState } from 'react';
import styled from 'styled-components';
import { REALTY_ACTION_TYPE } from '../../constant/realtyConstant';

const List = ({ realty: { realty, id, name }, realtyDispatch }) => {
  const [isCompleted, setisCompleted] = useState(false);

  return (
    <RealtyList>
      <CheckInputWrapper>
        <input
          type="checkbox"
          checked={isCompleted}
          // onChange={() => handleCheckBox(id)}
        />
        <TodoTitle>{name}</TodoTitle>
      </CheckInputWrapper>
    </RealtyList>
  );
};

const RealtyList = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  margin-bottom: 8px;
  padding: 8px 16px;
  margin: 0 8px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  background-color: #f3f4f6;
  color: #4b5563;
  margin: 8px 0;
`;

const CheckInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input[type='checkbox'] {
    cursor: pointer;
    width: 16px;
    height: 16px;
    border: 2px solid #9ca3af;
    border-radius: 2px;
  }
`;

const TodoTitle = styled.span`
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
