import Header from '../components/propertyUpdate/src/component/Header';
import Buildings from '../components/propertyUpdate/src/component/Buildings';
import { useState } from 'react';
import Price from '../components/propertyUpdate/src/component/Rental';
import location from '../components/propertyUpdate/src/component/address_location.svg';
import Rental from '../components/propertyUpdate/src/component/Rental';
import Rentalchange from '../components/propertyUpdate/src/component/Rentalchange';
import BuildingImage from '../components/propertyUpdate/src/component/BuildingImage';
import DefaultImage from '../components/propertyUpdate/src/component/DefaultImage';
import FacilityChange from '../components/propertyUpdate/src/component/FacilityChange';
import FacilityList from '../components/propertyUpdate/src/component/FacilityList';
import BuildingGallery from '../components/propertyUpdate/src/component/BuildingGallery';
import Advertisement from '../components/propertyUpdate/src/component/Advertisement';
import ModalRental from '../components/propertyUpdate/src/modals/RentUpModal';
import { Modal } from 'react-bootstrap';
import './propertyUpdate.css';
const PropertyUpdate = () => {
  const [buildings, setBuildings] = useState([
    {
      id: 1,
      name: 'Building 1',
      address: 'Main St1',
      month: 0,
      day: 0,
      around: 0,
    },
  ]);
  const myclassName = {
    color: 'white',
    backgroundColor: 'DodgerBlue',
    padding: '10px',
    fontFamily: 'Arial',
    left: '100px',
    top: '150px',
  };

  return (
    <div className="container">
      <div class="mainhead">
        <div className="mainhead1"></div>

        <Header />

        <Rental />

        {/* <Rentalchange />

        <BuildingImage /> */}

        <DefaultImage />
        <div className="facility_border"></div>
        <div className="price_border"></div>
        <ModalRental />
        <FacilityChange />
        <div className="rental12">
          <Rentalchange />
        </div>
        <FacilityList />
        <BuildingGallery />
        <div className="image_boundary"></div>
        <div className="rental14">
          <BuildingImage />
        </div>
        <Advertisement />
      </div>
    </div>
  );
};

export default PropertyUpdate;
