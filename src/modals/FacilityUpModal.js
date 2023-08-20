import React, { useState } from "react";
import { Modal, Button, Container } from "react-bootstrap";
import styles from "./FacilityUpModal.css";
import changing_room from './component2/changing_room.png'
import elevator from './component2/elevator.jpeg'
import emergency_exit from './component2/emergency_exit.png'
import escalator from './component2/escalator.png'
import fire_exit from './component2/fire_exit.jpeg'
import fire_extinguisher from './component2/fire_extinguisher.png'
import no_smoking from './component2/no_smoking.png'
import parking_lot from './component2/parking_lot.jpeg'
import sink from './component2/sink.png'
import toilet from './component2/toilet.png'
import './FacilityUpload.css'
const FacilityUpModal = ({ show, onHide }) => {
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
          {/* <Modal.Title id="contained-modal-title-vcenter">
            부가시설 정보
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body style={{ minHeight: "40vh" }}>
        <>
    <div style={{width: 720, height: 600, position: 'relative',borderStyle: "solid"}}>
      {/* <div style={{width: 713, height: 600, left: 0, top: 0, position: 'absolute'}}>
        <div style={{width: 713, height: 600, left: 0, top: 0, position: 'absolute', background: 'white'}} />
    </div> */}
    <div style={{width: 534, height: 80, left: 89, top: 468, position: 'absolute'}}>
      {/* <div style={{width: 534, height: 80, left: 0, top: 0, position: 'absolute', background: '#11B7E4'}} /> */}
      {/* <button style={{width: 534, height: 80, left: 0, top: 0, position: 'absolute', background: '#11B7E4'}}>
        <div style={{left: 161, top: 25, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word'}}>
        부가시설정보 변경완료 
        </div>
      </button> */}
    </div>
    <div style={{left: 89, top: 68, position: 'absolute', color: '#3F3F3F', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word'}}>부가시설 정보</div>
    <div style={{left: 89, top: 136, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
      <div style={{color: '#818181', fontSize: 15, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word'}}>실내 편의시설</div>
        <div style={{justifyContent: 'flex-start', alignItems: 'flex-end', gap: 20, display: 'inline-flex'}}>
          <div style={{justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
            <div style={{width: 24, height: 24, position: 'relative'}}>
              <div style={{padding: 11, left: -8, top: -8, position: 'absolute', borderRadius: 100, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
          </div>
        </div>
        <label className ="container">
          <div style={{paddingLeft: 6, paddingRight: 6, paddingTop: 4, paddingBottom: 0, borderRadius: 5, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{color: '#3F3F3F', fontSize: 15, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word'}}><img src = {changing_room} width = "20" height = "20" alt = ""></img>탈의실</div>
            <input type="checkbox"  defaultChecked="checked"/>
            <span className="checkmark"/>
          </div>
        </label>
      </div>
      <div style={{justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
        <label className ="container">
          <div style={{paddingLeft: 6, paddingRight: 6, paddingTop: 4, paddingBottom: 0, borderRadius: 5, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{color: '#3F3F3F', fontSize: 15, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word'}}><img src = {toilet} width = "20" height = "20" alt = ""></img>화장실</div>
            <input type="checkbox"  defaultChecked="checked"/>
            <span className="checkmark"/>
          </div>
        </label>
      </div>
      <div style={{justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
        <label className ="container">
          <div style={{paddingLeft: 6, paddingRight: 6, paddingTop: 4, paddingBottom: 0, borderRadius: 5, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{color: '#3F3F3F', fontSize: 15, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word'}}><img src = {sink} width = "20" height = "20" alt = "" ></img>싱크대</div>
          <input type="checkbox"  defaultChecked="checked"/>
          <span className="checkmark"/>
          </div>
        </label>
      </div>
    </div>
  </div>
  <div style={{left: 89, top: 240, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
    <div style={{color: '#818181', fontSize: 15, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word'}}>실외 편의시설</div>
    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
      <div style={{justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
      <label className ="container">
        <div style={{paddingLeft: 6, paddingRight: 6, paddingTop: 4, paddingBottom: 4, borderRadius: 5, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
          <div style={{color: '#3F3F3F', fontSize: 15, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word'}}><img src = {parking_lot} width = "25" height = "25" alt = ""></img>주차장</div>
          <input type="checkbox"  defaultChecked="checked"/>
          <span className="checkmark"/>
        </div>
      </label>
      </div>
      <div style={{justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
      <label className ="container">
        <div style={{paddingLeft: 6, paddingRight: 6, paddingTop: 4, paddingBottom: 4, borderRadius: 5, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
          <div style={{color: '#3F3F3F', fontSize: 15, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word'}}> <img src = {escalator} width = "25" height = "25" alt = ""></img>에스컬레이터</div>
          <input type="checkbox"  defaultChecked="checked"/>
          <span className="checkmark"/>
        </div>
      </label>
      </div>
      <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
        <div style={{justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
        <label className ="container">
          <div style={{paddingLeft: 6, paddingRight: 6, paddingTop: 4, paddingBottom: 4, borderRadius: 5, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{color: '#3F3F3F', fontSize: 15, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word'}}><img src = {elevator} width = "25" height = "25" alt = ""></img>엘리베이터</div>
            <input type="checkbox"  defaultChecked="checked"/>
            <span className="checkmark"/>
          </div>
        </label>
        </div>
      </div>
    </div>
  </div>
  <div style={{left: 89, top: 344, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
    <div style={{color: '#818181', fontSize: 15, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word'}}>안전/건강</div>
    <div style={{justifyContent: 'center', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
      <div style={{justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
      <label className ="container">
        <div style={{paddingLeft: 6, paddingRight: 6, paddingTop: 4, paddingBottom: 4, borderRadius: 5, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
          <div style={{color: '#3F3F3F', fontSize: 15, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word'}}><img src = {no_smoking} width = "25" height = "25" alt = ""></img>금연구역</div>
          <input type="checkbox"  defaultChecked="checked"/>
          <span className="checkmark"/>
        </div>
        </label>
      </div>
      <div style={{justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
      <label className ="container">
        <div style={{paddingLeft: 6, paddingRight: 6, paddingTop: 4, paddingBottom: 4, borderRadius: 5, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
          <div style={{color: '#3F3F3F', fontSize: 15, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word'}}><img src = {fire_extinguisher} width = "25" height = "25" alt = ""></img>소화기</div>
          <input type="checkbox"  defaultChecked="checked"/>
          <span className="checkmark"/>
        </div>
        </label>
      </div>
      <div style={{justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
      <label className ="container">
        <div style={{paddingLeft: 6, paddingRight: 6, paddingTop: 4, paddingBottom: 4, borderRadius: 5, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
          <div style={{color: '#3F3F3F', fontSize: 15, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word'}}><img src = {fire_exit} width = "25" height = "25" alt = ""></img>비상구</div>
          <input type="checkbox"  defaultChecked="checked"/>
          <span className="checkmark"/>
        </div>
        </label>
      </div>
      <div style={{justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
      <label className ="container">
        <div style={{paddingLeft: 6, paddingRight: 6, paddingTop: 4, paddingBottom: 4, borderRadius: 5, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
          <div style={{color: '#3F3F3F', fontSize: 15, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word'}}><img src = {emergency_exit} width = "25" height = "25" alt = ""></img>실내방화문</div>
          <input type="checkbox"  defaultChecked="checked"/>
          <span className="checkmark"/>
        </div>
        </label>
      </div>
    </div>
  </div>
</div>
    </>
        </Modal.Body>
      </Container>
      <Container>
        <Modal.Footer>
          {/* <Button className="facility_btn" block variant="info" type="button">
            부가시설 정보 변경 완료
          </Button> */}
        <button style={{width: 534, height: 80, left: 100, top: -150, position: 'absolute', background: '#11B7E4'}}>
          <div style={{left: 161, top: 25, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word'}}>
          부가시설정보 변경완료 
          </div>
        </button>
        </Modal.Footer>
      </Container>
    </Modal>
  );
};

export default FacilityUpModal;
