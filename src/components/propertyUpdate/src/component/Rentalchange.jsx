import React, { useState } from 'react';
import RentUpModal from '../modals/RentUpModal';
/* import { Button } from 'react-bootstrap'; */
import Button from '../../../common/Button';
import './RentalChange.css';
const Rentalchange = () => {
  const [rentUpModalOn, setRentUpModalOn] = useState(false);
  return (
    <>
      <RentUpModal
        show={rentUpModalOn}
        onHide={() => setRentUpModalOn(false)}
      />

      <div className="rental13">
        <Button variant="primary" onClick={() => setRentUpModalOn(true)}>
          임대료 변경
        </Button>
      </div>
    </>
  );
};

export default Rentalchange;
