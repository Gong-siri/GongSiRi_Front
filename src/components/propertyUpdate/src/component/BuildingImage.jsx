import React, { useState } from 'react';
import ImageUpModal from '../modals/ImageUpModal';
/* import { Button } from 'react-bootstrap'; */
import Button from '../../../common/Button';

const BuildingImage = () => {
  const [imageUpModalOn, setImageUpModalOn] = useState(false);
  return (
    <>
      <ImageUpModal
        show={imageUpModalOn}
        onHide={() => setImageUpModalOn(false)}
      />

      {/* <div className="rental14"> */}
      <div className="images1">
        {/* 대표 이미지 변경<i class="arrow right"></i>
          </div> */}
        <Button variant="primary" onClick={() => setImageUpModalOn(true)}>
          대표이미지 변경
        </Button>
      </div>
      {/* </div> */}
    </>
  );
};

export default BuildingImage;
