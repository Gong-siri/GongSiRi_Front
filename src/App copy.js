import Header from "./component/Header";
import Buildings from "./component/Buildings";
import { useState } from "react";
import Price from "./component/Rental";
import location from "./component/address_location.svg";
import Rental from "./component/Rental";
import Rentalchange from "./component/Rentalchange";
import BuildingImage from "./component/BuildingImage";
import DefaultImage from "./component/DefaultImage";
import FacilityChange from "./component/FacilityChange";
import FacilityList from "./component/FacilityList";
import BuildingGallery from "./BuildingGallery";
import Advertisement from "./component/Advertisement";
const App = () => {
  const [buildings, setBuildings] = useState([
    {
      id: 1,
      name: "Building 1",
      address: "Main St1",
      month: 0,
      day: 0,
      around: 0,
    },
  ]);
  const myclassName = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    left: "100px",
    top: "150px",
  };
  return (
    <div className="container">
      <div class="mainhead">
        <div className="mainhead1"></div>

        <Header />

        <Rental />

        <Rentalchange />

        <BuildingImage />

        <DefaultImage />
        <div className="facility_border"></div>
        <div className="price_border"></div>

        <FacilityChange />

        <FacilityList />

        <BuildingGallery />
        <div className="image_boundary"></div>

        <Advertisement />
      </div>
    </div>
  );
};

export default App;
