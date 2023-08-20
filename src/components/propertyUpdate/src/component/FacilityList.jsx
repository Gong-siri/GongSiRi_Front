import React from 'react';
import parking_lot from './images/parking_lot.jpeg';
import fire_extinguisher from './images/fire_extinguisher.png';
import toilet from './images/toilet.png';
import no_smoking from './images/no_smoking.png';
import elevator from './images/elevator.jpeg';
import sink from './images/sink.png';
const FacilityList = () => {
  return (
    <div>
      <div className="facilities">
        <div className="facility3">부가시설</div>
        <div className="facility4">
          <div className="facility5">
            <div className="facility6">
              <div className="width: 20px; height: 20px; position: relative">
                <img
                  src={parking_lot}
                  width="21.023"
                  height="21.012"
                  alt=""
                ></img>
              </div>
              <div className="facility7">
                <div className="facility8">주차장</div>
              </div>
            </div>
            <div className="facility6">
              <div className="width: 15.44px; position: relative">
                <img
                  src={fire_extinguisher}
                  width="15.441"
                  height="21.152"
                  alt=""
                ></img>
              </div>
              <div className="facility7">
                <div className="facility8">소화기</div>
              </div>
            </div>
            <div className="facility6">
              <img src={toilet} width="19" height="21" alt=""></img>
              <div className="facility7">
                <div className="facility8">화장실</div>
              </div>
            </div>
            <div className="facility6">
              <img src={no_smoking} width="21.028" height="21.016" alt=""></img>
              <div className="facility7">
                <div className="facility8">금연구역</div>
              </div>
            </div>
          </div>
          <div className="facility_next">
            <div className="facility6">
              <img src={elevator} width="21.22" height="18.015" alt=""></img>
              <div className="facility7">
                <div className="facility8">엘리베이터</div>
              </div>
            </div>
            <div className="facility6">
              <img src={sink} width="20.96" height="18.522" alt=""></img>
              <div className="facility7">
                <div className="facility8">싱크대</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityList;
