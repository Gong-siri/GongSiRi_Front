import React, { useState } from 'react';
import RentUpModal from '../modals/RentUpModal';
import { Button } from 'react-bootstrap';
import './RentalChange.css';
const Rentalchange = () => {
  const [rentUpModalOn, setRentUpModalOn] = useState(false);
  return (
    <>
      <RentUpModal
        show={rentUpModalOn}
        onHide={() => setRentUpModalOn(false)}
      />
      {/* <div className = "rental12"> */}
      {/* <div className="rental13"> */}
      <div className="rental13">
        <Button variant="primary" onClick={() => setRentUpModalOn(true)}>
          임대료 변경
        </Button>
      </div>
      {/* </div> */}
    </>
  );
};

export default Rentalchange;
