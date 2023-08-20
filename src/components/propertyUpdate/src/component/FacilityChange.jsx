import React, { useState } from 'react';
import FacilityUpModal from '../modals/FacilityUpModal';
import { Button } from 'react-bootstrap';

const FacilityChange = () => {
  const [facilityUpModalOn, setFacilityUpModalOn] = useState(false);
  return (
    <>
      <FacilityUpModal
        show={facilityUpModalOn}
        onHide={() => setFacilityUpModalOn(false)}
      />

      <div className="facility1">
        <div className="facility2">
          {/* 부가시설 변경<i class="arrow right"></i> */}
          <Button variant="primary" onClick={() => setFacilityUpModalOn(true)}>
            부가시설 변경
          </Button>
        </div>
      </div>
    </>
  );
};

export default FacilityChange;
