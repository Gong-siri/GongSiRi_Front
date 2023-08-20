import React from 'react';

const Advertisement = () => {
  return (
    <div>
      <div className= "advertisements">
        <div className="advertisement_text">건물 공실광고</div>
        <div className="switch_pos">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
