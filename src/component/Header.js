import location from "./address_location.svg";
import Buildings from "./Buildings";
const Header = () => {
  return (
    <div>
      <div className="mainhead2"></div>
      <div className="mainhead3">
        <div className="mainhead4">강남파이낸스플라자</div>
        <div className="mainhead5">
          <img
            src="./img/location.png"
            className="header_line7"
            alt="location"
            width="16"
            height="23"
          ></img>
          <div className="maindhead6"></div>
          <div className="mainhead7">
            서울특별시 강남구 테헤란로 419 삼성금융프라자
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
