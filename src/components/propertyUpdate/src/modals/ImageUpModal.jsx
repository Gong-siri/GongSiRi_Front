import React, { useState } from 'react';
import { Modal, Button, Container } from 'react-bootstrap';
import styles from  './ImageUpModal.css';

const ImageUpModal = ({ show, onHide }) => {
  const [imgBorder, setImageBorder] = useState(false);
  let className = "border";
  if (imgBorder) {
    className = "img_upload_box";
  }

  function imgClick() {
    if (!imgBorder) {
      setImageBorder(true);
    } else {
      setImageBorder(false);
    }
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            대표이미지
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ minHeight: "40vh" }}>
          <div className="img_list">
            <div className={className}>
              <img
                onClick={imgClick}
                className="img_upload"
                src="./img/Gangnam.jpg"
                width="91"
              ></img>
            </div>

            {[1, 2, 3].map(function () {
              return (
                <div className="img_upload_space">
                  <img src="./img/upload.png" />
                </div>
              );
            })}

            {[1, 2, 3, 4].map(function () {
              return (
                <div className="img_space">
                  <img src="./img/upload.png" />
                </div>
              );
            })}

            {[1, 2, 3, 4].map(function () {
              return (
                <div className="img_space">
                  <img src="./img/upload.png" />
                </div>
              );
            })}
          </div>
        </Modal.Body>
      </Container>
      <Container>
        <Modal.Footer>
          <Button className="img_btn" block variant="info" type="button">
            대표 이미지 변경 완료
          </Button>
        </Modal.Footer>
      </Container>
    </Modal>
  );
};

export default ImageUpModal;
