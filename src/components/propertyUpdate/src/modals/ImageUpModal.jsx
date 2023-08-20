import React, { useState, useRef } from 'react';
import { Modal, Container } from 'react-bootstrap';
import styles from './ImageUpModal.css';
import Button from '../../../common/Button';
//import upload from './asserts/detail/upload.png';
//import Gangnam from './asserts/detail/Gangnam.jpg';

const ImageUpModal = ({ show, onHide }) => {
  const setProfileImage = useRef(null);
  const [profile, setProfile] = useState('/detail/upload.png');
  const [imgBorder, setImageBorder] = useState(false);
  const [imgFile, setImgFile] = useState('');
  const imgRef = useRef();

  const imgHandler = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgFile(reader.result);
      };
      setProfile(URL.createObjectURL(file));
      console.log(profile);
      const formData = new FormData();
      formData.append('file', file);
      //const response = await server.post(엔드포인트, formData);
    }
  };

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  const imgBtnClick = (e) => {
    e.preventDefault();
    if (setProfileImage.current) {
      setProfileImage.current.click();
    }
  };
  let className = 'border';
  if (imgBorder) {
    className = 'img_upload_box';
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
        <Modal.Body style={{ minHeight: '40vh' }}>
          <div className="img_list">
            <div className="img_space">
              <input
                type="file"
                accept="image/*"
                id="profileImg"
                onChange={saveImgFile}
                ref={imgRef}
              />

              <img
                src={imgFile ? imgFile : `/detail/upload.png`}
                alt="프로필 이미지"
              />
              <div className="btn12345">
                <button className="btn12345" onClick={imgBtnClick}>
                  사진 업로드
                </button>
              </div>
              <input
                ref={setProfileImage}
                className={styles.imgInput}
                type={'file'}
                id={'profile'}
                accept={'image/*'}
                name={'file'}
                onChange={imgHandler}
              />
            </div>
          </div>{' '}
        </Modal.Body>
      </Container>
      <Container>
        <Modal.Footer>
          <Button /* className="img_btn" */ block variant="info" type="button">
            대표 이미지 변경 완료
          </Button>
        </Modal.Footer>
      </Container>
    </Modal>
  );
};

export default ImageUpModal;
