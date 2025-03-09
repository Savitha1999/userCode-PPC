





import React, { useEffect, useState } from 'react';
import TopBar from './TopBar';
import BottomNavigation from './BottomNavigation';
import { FaHome, FaBuilding, FaPlusSquare, FaUser, FaEllipsisH } from 'react-icons/fa';
import Nopage from './Nopage';
import MoreComponent from './MoreComponent';
import MyProperty from './MyProperty';
import PropertyCards from './PropertyCards';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import AddProps from './AddProps';
import logo from '../Assets/ppc_sentyourinterest.png';
import logo2 from '../Assets/allprop50.png';
import logo3 from '../Assets/bl50.png';
import logo4 from '../Assets/Rent Property-01.png';
import logo5 from '../Assets/uc50.png';
import logo6 from '../Assets/groom.PNG';
import logo7 from '../Assets/fprop50.png';
import nvprop50 from '../Assets/nvprop50.PNG';
import logo9 from '../Assets/my50.png';
import logo10 from '../Assets/seller50.png';
import logo11 from '../Assets/buyer50.PNG';
import PropertyForm from './PropertyAssistance';
import TopMyProperty from './TopMyProperty';
import OwnerMenu from './OwnerMenu';
import BuyerMenu from './BuyerMenu';
import CardsDemo from './CardsDemo';
import BuyerList from './BuyerList';
import ZeroView from './ZeroView';
import Building from './Building';
import Navbar from "./Navbar";

const Main = () => {
  const [ppcId, setPpcId] = useState(null); // Add state for ppcId
  const navigate = useNavigate();
  const location = useLocation();

  const { phoneNumber: statePhoneNumber, countryCode: stateCountryCode } = location.state || {};
  const storedPhoneNumber = localStorage.getItem('phoneNumber');
  const storedCountryCode = localStorage.getItem('countryCode');

  const phoneNumber = statePhoneNumber || storedPhoneNumber;
  const countryCode = stateCountryCode || storedCountryCode;


  useEffect(() => {
    if (phoneNumber && countryCode) {
      localStorage.setItem('phoneNumber', phoneNumber);
      localStorage.setItem('countryCode', countryCode);
      // handlehomeProperty(); // Automatically call handlehomeProperty when the component mounts
    } else {
      toast.error('Missing required information to add property.');
    }
  }, [phoneNumber, countryCode]);


  const [activeContent, setActiveContent] = useState('bottomHome'); 

  const topBarItems = [
    { icon: logo, text: 'Py Property', content: 'topPyProperty' },
    { icon: logo2, text: 'All Property', content: 'topAllProperty' },
    { icon: logo3, text: 'Buyer List', content: 'topMBuyerList' },
    { icon: logo4, text: 'Rent Property', content: 'topRentProperty' },
    { icon: logo5, text: 'Used Cars', content: 'topUsedCars' },
    { icon: logo6, text: 'Pm Groom', content: 'topPmGroom' },
    { icon: logo6, text: 'Pm Bride', content: 'topPmBride' },
    { icon: logo7, text: 'Feature Property', content: 'topFeatureProperty' },
    { icon: nvprop50, text: 'Not Viewed Property', content: 'topNotViewedProperty' },
    { icon: logo9, text: 'My Property', content: 'topMyProperty' },
    { icon: logo10, text: 'Owner Menu', content: 'topOwnerMenu' },
    { icon: logo11, text: 'Buyer Menu', content: 'topBuyerMenu' },
  ];



  const bottomNavItems = [
    { icon: <FaHome />, text: 'Home', content: 'bottomHome' },
    { icon: <FaBuilding />, text: 'MyProperty', content: 'bottomProperty' },
    { icon: <FaPlusSquare />, text: 'AddProperty', content: 'bottomAdd'  },
    { icon: <FaUser />, text: 'Buyer', content: 'bottomBuyer' },
    { icon: <FaEllipsisH />, text: 'More', content: 'bottomMore' },
  ];

  const renderContent = () => {
    switch (activeContent) {
      case 'topPyProperty': return <CardsDemo phoneNumber={`${countryCode}${phoneNumber}`} />;
      case 'topAllProperty': return <CardsDemo phoneNumber={`${countryCode}${phoneNumber}`} />;
      case 'topMBuyerList': return <BuyerList phoneNumber={`${countryCode}${phoneNumber}`} />;
      case 'topRentProperty': return <Building />;
      case 'topUsedCars': return <Building />;
      case 'topPmGroom': return <Building />;
      case 'topPmBride': return <Building />;
      case 'topFeatureProperty': return <Building />;
      case 'topNotViewedProperty': return <ZeroView />;
      case 'topMyProperty': return <MyProperty phoneNumber={`${countryCode}${phoneNumber}`} />;
      case 'topOwnerMenu': return <OwnerMenu phoneNumber={`${countryCode}${phoneNumber}`}  />;
      case 'topBuyerMenu': return <BuyerMenu phoneNumber={`${countryCode}${phoneNumber}`} />;
      case 'bottomHome': return <PropertyCards  phoneNumber={`${countryCode}${phoneNumber}`} />;
      case 'bottomProperty': 
      // return <MyProperty />
         return <MyProperty phoneNumber={`${countryCode}${phoneNumber}` } />;
      case 'bottomAdd': 
      // return <AddProps />
        return <AddProps  phoneNumber={`${countryCode}${phoneNumber}`} />;
      case 'bottomBuyer': return <PropertyForm  phoneNumber={`${countryCode}${phoneNumber}`} />;
      case 'bottomMore': return <MoreComponent  phoneNumber={`${countryCode}${phoneNumber}`} />;
      default: return <Nopage />;
    }
  };

  return (
    // <div className="d-flex flex-column align-items-center justify-content-center">
    //   <TopBar items={topBarItems} setActive={setActiveContent} activeItem={activeContent} />
    //   <div className="content" style={{ flex: 1, overflowY: 'auto' }}>
    //     {renderContent()} 
    //   </div>
    //   <div style={{ position: 'fixed', bottom: 0 }}>
    //     <BottomNavigation 
    //       items={bottomNavItems}
    //       setActive={setActiveContent}
    //       activeItem={activeContent}
    //     />
    //   </div>
    // </div>
    <div className="d-flex flex-column position-relative" style={{ height: "100%", width: "100%" }}>
  
  <div style={{  width: "100%" }}>
    <Navbar />
  </div>

  <div style={{  width: "100%", overflowX:"auto", scrollbarWidth:"none" }}>
    <TopBar items={topBarItems} setActive={setActiveContent} activeItem={activeContent} />
  </div>

  {/* <div className="content" style={{ height: "70%", width: "100%", overflowY: "auto", scrollbarWidth:"none"  }}>
    {renderContent()} 
  </div> */}
<div className="content pb-5" style={{ height: "calc(85% - 70px)", width: "100%", overflowY: "auto", scrollbarWidth: "none" }}>
  {renderContent()}
</div>

  <div className='position-absolute bottom-0' style={{ width: "100%" }}>
    <BottomNavigation 
      items={bottomNavItems}
      setActive={setActiveContent}
      activeItem={activeContent}
    />
  </div>

</div>
  );
};

export default Main;











