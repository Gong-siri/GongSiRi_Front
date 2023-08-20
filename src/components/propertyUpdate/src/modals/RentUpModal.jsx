import React, { useState } from "react";
import { Modal, Button, Container, Form } from "react-bootstrap";
import styles from "./ImageUpModal.css";

const RentUpModal = ({ show, onHide }) => {
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
            건물 임대료
          </Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ minHeight: "40vh" }}>
          <div
            style={{
              color: "#818181",
              fontSize: 20,
              fontFamily: "Pretendard",
              fontWeight: "700",
              wordWrap: "break-word",
              background: "#F4F4F4",
              borderRadius: 6,
              border: "1px #E9E9E9 solid",
              paddingLeft: 7,
              paddingRight: 7,
              paddingTop: 3,
              paddingBottom: 3,
              display: "inline-flex",
            }}
          >
            월세
          </div>

          <div
            style={{
              color: "#3F3F3F",
              fontSize: 15,
              fontFamily: "Pretendard",
              fontWeight: "700",
              wordWrap: "break-word",
              paddingLeft: 7,
              paddingRight: 7,
              paddingTop: 6,
              paddingBottom: 6,
              background: "#EBFFE1",
              borderRadius: 6,
              display: "inline-flex",
              position: "absolute",
              left: 90,
              top: 18,
            }}
          >
            주변보다 높음 &nbsp;&nbsp;&nbsp; 1,000,000 &nbsp;
            <img src="./img/Polygon 1.png" width="9" height="9" />
          </div>

          <div
            style={{
              left: 650,
              top: 15,
              position: "absolute",
              textAlign: "right",
              color: "#3F3F3F",
              fontSize: 25,
              fontFamily: "Pretendard",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            원
          </div>

          <div
            style={{
              paddingLeft: 7,
              paddingRight: 7,
              paddingTop: 3,
              paddingBottom: 3,
              left: 15,
              top: 120,
              color: "#818181",
              fontSize: 20,
              fontFamily: "Pretendard",
              fontWeight: "700",
              wordWrap: "break-word",
              display: "inline-flex",
              background: "#F4F4F4",
              position: "absolute",
              borderRadius: 6,
              border: "1px #E9E9E9 solid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            일세
          </div>

          <div
            style={{
              color: "#3F3F3F",
              fontSize: 15,
              fontFamily: "Pretendard",
              fontWeight: "700",
              wordWrap: "break-word",
              paddingLeft: 7,
              paddingRight: 7,
              paddingTop: 6,
              paddingBottom: 6,
              left: 90,
              top: 123,
              position: "absolute",
              background: "#CBECFF",
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
              gap: 9,
              display: "inline-flex",
            }}
          >
            주변보다 낮음 &nbsp;&nbsp;&nbsp;&nbsp; 900,000 &nbsp;
            <img src="./img/Polygon 2.png" width="9" height="9" />
          </div>

          <div
            style={{
              left: 650,
              top: 123,
              position: "absolute",
              textAlign: "right",
              color: "#3F3F3F",
              fontSize: 25,
              fontFamily: "Pretendard",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            원
          </div>

          <div
            style={{
              color: "#818181",
              fontSize: 20,
              fontFamily: "Pretendard",
              fontWeight: "700",
              wordWrap: "break-word",
              paddingLeft: 7,
              paddingRight: 7,
              paddingTop: 3,
              paddingBottom: 3,
              left: 14,
              top: 230,
              position: "absolute",
              background: "#F4F4F4",
              borderRadius: 6,
              border: "1px #E9E9E9 solid",
              justifyContent: "center",
              alignItems: "center",
              gap: 9,
              display: "inline-flex",
            }}
          >
            시세
          </div>

          <div
            style={{
              color: "#3F3F3F",
              fontSize: 15,
              fontFamily: "Pretendard",
              fontWeight: "700",
              wordWrap: "break-word",
              paddingLeft: 7,
              paddingRight: 7,
              paddingTop: 6,
              paddingBottom: 6,
              left: 90,
              top: 232,
              position: "absolute",
              background: "#EBFFE1",
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
              gap: 9,
              display: "inline-flex",
            }}
          >
            주변보다 낮음 &nbsp;&nbsp;&nbsp;&nbsp; 900,000 &nbsp;
            <img src="./img/Polygon 1.png" width="9" height="9" />
          </div>
          <input type="text" placeholder="임대료"></input>
          <div
            style={{
              left: 650,
              top: 230,
              position: "absolute",
              textAlign: "right",
              color: "#3F3F3F",
              fontSize: 25,
              fontFamily: "Pretendard",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            원
          </div>
        </Modal.Body>
      </Container>
      <Container>
        <Modal.Footer>
          <Button className="rent_btn" block variant="info" type="button">
            임대료 변경 완료
          </Button>
        </Modal.Footer>
      </Container>
    </Modal>
  );
};

export default RentUpModal;
