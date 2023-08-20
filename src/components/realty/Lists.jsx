import styled from 'styled-components';

import List from './List';

const Lists = ({ realty, realtyDispatch }) => {
  return (
    <div>
      <ul>
        {realty.length > 0 ? (
          realty.map((realty) => (
            <List
              key={realty.id}
              realty={realty}
              realtyDispatch={realtyDispatch}
            />
          ))
        ) : (
          <H4>보유중인 매물이 없습니다</H4>
        )}
      </ul>
    </div>
  );
};

const H4 = styled.h4`
  text-align: center;
`;

export default Lists;
