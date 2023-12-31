import React, { useState } from 'react';
import FacilityUpModal from '../modals/FacilityUpModal';
/* import { Button } from 'react-bootstrap'; */
import Button from '../../../common/Button';

const FacilityChange = () => {
  const [facilityUpModalOn, setFacilityUpModalOn] = useState(false);
  return (
    <>
      <FacilityUpModal
        show={facilityUpModalOn}
        onHide={() => setFacilityUpModalOn(false)}
      />

      <div className="facility1">
        <div className="facility2"></div>
        <Button variant="primary" onClick={() => setFacilityUpModalOn(true)}>
          부가시설 변경
        </Button>
      </div>
    </>
  );
};

export default FacilityChange;
