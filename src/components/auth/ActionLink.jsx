import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ActionLink = ({ question, to, text }) => {
  return (
    <StyledActionLink>
      {question} <Link to={to}>{text}</Link>
    </StyledActionLink>
  );
};

const StyledActionLink = styled.div`
  font-size: 23px;

  a {
    font-size: 18px;
    color: #777;
  }
`;

export default ActionLink;
