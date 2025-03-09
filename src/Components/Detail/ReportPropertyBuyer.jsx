









import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {FaCamera, FaEye , FaRulerCombined, FaBed, FaUserAlt, FaCalendarAlt, FaRupeeSign } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import myImage from '../../Assets/Rectangle 146.png'; // Correct path
import myImage1 from '../../Assets/Rectangle 145.png'; // Correct path
import pic from '../../Assets/Default image_PP-01.png'; // Correct path

const PropertyCard = ({ property, onRemove, onUndo }) => {
  return (
    

    <div className="row g-0 rounded-4 mb-2" style={{ border: '1px solid #ddd', overflow: "hidden", background:"#EFEFEF"}}>
                  <div className="col-md-4 col-4 d-flex flex-column justify-content-between align-items-center">
                  <div className="text-white py-1 px-2 text-center" style={{ width: '100%', background: "#2F747F" }}>
 PUC- {property.ppcId}
 </div>


 <div style={{ position: "relative", width: "100%", height:'150px'}}>
            <img
                                        src={property.photos?.length ? `http://localhost:5000/${property.photos[0]}` : "https://d17r9yv50dox9q.cloudfront.net/car_gallery/default.jpg"}
                                        alt="Property"
                                        className="img-fluid"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                      />
          
          <div >
          <div className="d-flex justify-content-between w-100" style={{ position: "absolute",
          bottom: "0px"}}>
          <span className="d-flex justify-content-center align-items-center" style={{ color:'#fff', background:`url(${myImage}) no-repeat center center`, fontSize:'12px', width:'50px' }}>
          <FaCamera className="me-1"/> 1
          </span>
          <span className="d-flex justify-content-center align-items-center" style={{ color:'#fff', background:`url(${myImage1}) no-repeat center center`, fontSize:'12px', width:'50px' }}>
          <FaEye className="me-1" />1
          </span>
          </div>
          </div>
          </div>


                 </div>
                 <div className="col-md-8 col-8 ps-2">
                  <div className="d-flex justify-content-between"><p className="mb-1 fw-bold" style={{ color:'#5E5E5E' }}>{property.propertyMode || 'N/A'}</p>
                 
                  {/* <p className="m-0 ps-3 pe-3" style={{background:"green", color:"white", cursor:"pointer", borderRadius: '0px 0px 0px 15px'}} onClick={() => onUndo(property.ppcId, property.postedUserPhoneNumber)}>UNDO</p> */}
                  {onRemove && (
            <p className="m-0 ps-3 pe-3" style={{background:"#FF0000", color:"white", cursor:"pointer", borderRadius: '0px 0px 0px 15px'}} onClick={() => onRemove(property.ppcId, property.interestedUser)}>Remove</p>
          )}
          {onUndo && (
            <p className="m-0 ps-3 pe-3" style={{background:"green", color:"white", cursor:"pointer", borderRadius: '0px 0px 0px 15px'}} onClick={() => onUndo(property.ppcId, property.interestedUser)}>Undo</p>
          )}
                  </div>
                   <p className="fw-bold m-0" style={{ color:'#000000' }}>{property.propertyType || 'N/A'}</p>
                   <p className=" fw-bold m-0" style={{ color:'#5E5E5E'}}>{property.city || 'N/A'}</p>
                   <div className="card-body ps-2 m-0 pt-0 pe-2 d-flex flex-column justify-content-center">
                     <div className="row">
                       <div className="col-6 d-flex align-items-center mt-1 mb-1">
                         <FaRulerCombined className="me-2" color="#2F747F" /> <span style={{ fontSize:'13px', color:'#5E5E5E' }}>{property.totalArea || 'N/A'}</span>
                       </div>
                       <div className="col-6 d-flex align-items-center mt-1 mb-1">
                         <FaBed className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#5E5E5E' }}>{property.bedrooms || 'N/A'}</span>
                       </div>
                       <div className="col-6 d-flex align-items-center mt-1 mb-1">
                         <FaUserAlt className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#5E5E5E' }}>{property.ownership || 'N/A'}</span>
                       </div>
                       <div className="col-6 d-flex align-items-center mt-1 mb-1">
                         <FaCalendarAlt className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#5E5E5E' }}>{property.bestTimeToCall || 'N/A'}</span>
                       </div>
                       {/* <div className="col-6 d-flex align-items-center mt-1 mb-1">
                         <FaRupeeSign className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#2E7480' }}>{property.price || 'N/A'}</span>
                       </div>
                       <div className="col-6 d-flex align-items-center mt-1 mb-1">
                         <p className="m-0" style={{ color:'#2F747F', fontSize:'13px',fontWeight:"bold"}}> Negotiation: <span style={{ color:'#5E5E5E' }}>{property.negotiation || 'N/A'}</span></p>
                       </div> */}
                        <div className="col-12 d-flex flex-col align-items-center mt-1 mb-1">
                                   <h6 className="m-0">
                                   <span style={{ fontSize:'17px', color:'#2F747F', fontWeight:'bold', letterSpacing:"1px" }}> <FaRupeeSign className="me-2" color="#2F747F"/>{property.price ? property.price.toLocaleString('en-IN') : 'N/A'}
                                   </span> 
                                   <span style={{ color:'#2F747F', fontSize:'13px', marginLeft:"5px",fontSize:'11px',}}> 
                                   Negotiable                </span> 
                                     </h6>
                                  </div>
                       <p style={{ color: "#2E7480", margin: "0px" }}>
                    <a
                      href={`tel:${property.interestedUser}`}
                      style={{
                        textDecoration: "none",
                        color: "#2E7480",
                      }}
                    >
                      <MdCall className="me-2" color="#2F747F" />{" "}
                      {property.interestedUser || 'N/A'}
                    </a>
                  </p>
                      </div>
                    </div>
                  </div>
               </div>
  );
};

const PropertyList = ({ properties, onRemove, onUndo }) => {
  return properties.length === 0 ? (
    <p>No properties found.</p>
  ) : (
    <div className="row mt-4 w-100">
      {properties.map((property) => (
        <PropertyCard key={property.ppcId} property={property} onRemove={onRemove} onUndo={onUndo} />
      ))}
    </div>
  );
};


const App = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeKey, setActiveKey] = useState("All");
  const { phoneNumber } = useParams(); // Getting phoneNumber from URL params
  const [message, setMessage] = useState({ text: "", type: "" });


  // Auto-clear message after 3 seconds
  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        setMessage({ text: "", type: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  useEffect(() => {
    if (!phoneNumber) {
      setMessage({ text: "Phone number is missing.", type: "error" });
      setLoading(false);
      return;
    }
  
    const fetchInterestedProperties = async () => {
      try {
        const apiUrl = `${process.env.REACT_APP_API_URL}/get-reportproperty-buyer`; // Buyer API endpoint
        const response = await axios.get(apiUrl, {
          params: { postedPhoneNumber: phoneNumber }, // Send phoneNumber as a query parameter
        });
  
        if (response.status === 200) {
          const transformedProperties = response.data.reportPropertyRequestsData.flatMap(property =>
            property.reportPropertyRequestersPhoneNumbers.map(interestedUser => ({
              ...property,
              interestedUser,
            }))
          );
  
          setProperties(transformedProperties);
          if (transformedProperties.length === 0) {
            setMessage({ text: "No properties found for this buyer.", type: "error" });
          }
        } else {
          setMessage({ text: "No properties found for this buyer.", type: "error" });
        }
      } catch (error) {
        setMessage({ text: "Error fetching properties.", type: "error" });
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };
  
    fetchInterestedProperties();
  }, [phoneNumber]);
  
  useEffect(() => {
    // Load properties from local storage or API
    const storedProperties = JSON.parse(localStorage.getItem("interestProperties")) || [];
    setProperties(storedProperties);
  }, []);

  // ✅ Remove interest or delete property
  const handleRemoveProperty = async (ppcId, interestedUser) => {
    if (!window.confirm("Are you sure you want to remove this interest?")) return;

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/delete-details-property`, { ppcId, phoneNumber: interestedUser });
      updatePropertyStatus(ppcId, "delete");
      setMessage({ text: "Interest removed successfully.", type: "success" });
    } catch (error) {
      console.error("Error removing interest:", error);
      setMessage({ text: "Error removing interest.", type: "error" });
    }
  };

  // ✅ Undo remove interest
  const handleUndoRemove = async (ppcId, interestedUser) => {
    if (!window.confirm("Do you want to restore this interest?")) return;

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/undo-delete-details`, { ppcId, phoneNumber: interestedUser });
      updatePropertyStatus(ppcId, "active");
      setMessage({ text: "Interest restored successfully!", type: "success" });
    } catch (error) {
      console.error("Error undoing delete:", error);
      setMessage({ text: "Error restoring interest.", type: "error" });
    }
  };

  // ✅ Update property status in local state and storage
  const updatePropertyStatus = (ppcId, status) => {
    const updatedProperties = properties.map((property) =>
      property.ppcId === ppcId ? { ...property, status } : property
    );
    setProperties(updatedProperties);
    localStorage.setItem("interestProperties", JSON.stringify(updatedProperties));
  };


  // Filter properties
  const activeProperties = properties.filter((property) => property.status !== "delete");
  const removedProperties = properties.filter((property) => property.status === "delete");

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="d-flex flex-column align-items-center justify-content-center m-0" 
        style={{ maxWidth: '500px', margin: 'auto', width: '100%' }}>
        
        {/* Buttons for filtering */}
        <div className="row g-2 w-100">
          <div className="col-6 p-0">
            <button className="w-100" style={{ backgroundColor: '#4F4B7E', color: 'white' }} 
              onClick={() => setActiveKey("All")}>
              All Properties
            </button>
          </div>
          <div className="col-6 p-0">
            <button className="w-100" style={{ backgroundColor: '#FF0000', color: 'white' }} 
              onClick={() => setActiveKey("Removed")}>
              Removed Properties
            </button>
          </div>

          {/* Message Alert */}
          {message.text && (
            <div className="col-12">
              <div className={`alert alert-${message.type} w-100`}>{message.text}</div>
            </div>
          )}

          {/* Property List */}
          <div className="col-12">
            <div className="w-100 d-flex align-items-center justify-content-center" style={{ maxWidth: '500px' }}>
              {loading ? (
                <p>Loading properties...</p>
              ) : activeKey === "All" ? (
                <PropertyList properties={activeProperties} onRemove={handleRemoveProperty} />
              ) : (
                <PropertyList properties={removedProperties} onUndo={handleUndoRemove} />
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;






















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { Tab, Nav, Row, Col } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
// import { 
//   FaRupeeSign, FaBed,  
//   FaCalendarAlt, FaUserAlt, FaRulerCombined,
//   FaCamera,
//   FaEye
// } from "react-icons/fa";
// import { MdCall } from "react-icons/md";

// import myImage from '../../Assets/Rectangle 146.png'; // Correct path
// import myImage1 from '../../Assets/Rectangle 145.png'; // Correct path
// import pic from '../../Assets/Default image_PP-01.png'; // Correct path

// const App = () => {
//   const [activeKey, setActiveKey] = useState('All');
//   const [removedProperties, setRemovedProperties] = useState([]);
//   const [properties, setProperties] = useState([]);

 
// //   const handleRemoveProperty = async (ppcId, phoneNumber) => {
// //     try {
// //       const response = await axios.post(`${process.env.REACT_APP_API_URL}/delete-detail-property`, {
// //         ppcId,
// //         phoneNumber
// //       });
// //       if (response.status === 200) {
// //         toast.success('Property removed successfully.');
// //         // Remove the property from "All" tab
// //         setProperties(properties.filter(property => property.ppcId !== ppcId));
// //         // Add the property to "Removed" tab
// //         setRemovedProperties(prevState => [...prevState, response.data.property]);
// //       }
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || 'Error removing property.');
// //     }
// //   };
  

// // const handleUndoRemove = async (ppcId, phoneNumber) => {
// //   try {
// //     const response = await axios.post(`${process.env.REACT_APP_API_URL}/undo-delete-detail`, {
// //       ppcId,
// //       phoneNumber,
// //     });
// //     if (response.status === 200) {
// //       toast.success("Property status reverted successfully!");

// //       const updatedProperty = response.data.property;

// //       // Move property from removedProperties to properties
// //       setRemovedProperties(prev => prev.filter(property => property.ppcId !== ppcId));
// //       setProperties(prev => [...prev, updatedProperty]);

// //       // Switch back to "All" tab after undo
// //       setActiveKey('All');
// //     }
// //   } catch (error) {
// //     toast.error("Error undoing property status.");
// //   }
// // };



// const [message, setMessage] = useState({ text: "", type: "" });


// const handleRemoveProperty = async (ppcId, phoneNumber) => {
//   const confirmDelete = window.confirm("Are you sure you want to remove this property?");
//   if (!confirmDelete) return;

//   try {
//     const response = await axios.post(`${process.env.REACT_APP_API_URL}/delete-detail-property`, {
//       ppcId,
//       phoneNumber
//     });

//     if (response.status === 200) {
//       setMessage({ text: "Property removed successfully.", type: "success" });
//       setProperties(prev => prev.filter(property => property.ppcId !== ppcId));
//       setRemovedProperties(prev => [...prev, response.data.property]);
//     }
//   } catch (error) {
//     setMessage({ text: error.response?.data?.message || "Error removing property.", type: "error" });
//   }
// };

// const handleUndoRemove = async (ppcId, phoneNumber) => {
//   const confirmUndo = window.confirm("Do you want to undo the removal of this property?");
//   if (!confirmUndo) return;

//   try {
//     const response = await axios.post(`${process.env.REACT_APP_API_URL}/undo-delete-detail`, {
//       ppcId,
//       phoneNumber,
//     });

//     if (response.status === 200) {
//       setMessage({ text: "Property status reverted successfully!", type: "success" });
//       const updatedProperty = response.data.property;
//       setRemovedProperties(prev => prev.filter(property => property.ppcId !== ppcId));
//       setProperties(prev => [...prev, updatedProperty]);
//       setActiveKey('All');
//     }
//   } catch (error) {
//     setMessage({ text: "Error undoing property status.", type: "error" });
//   }
// };


//   return (
//     <div style={{ maxWidth: '500px', margin: 'auto' }}>
//       <Tab.Container activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
//         <Row className="g-3">
//           <Col lg={12} className="d-flex flex-column align-items-center">
//             <Nav variant="tabs" className="mb-3" style={{ width: '100%' }}>
//               <Nav.Item style={{ flex: '1' }}>
//                 <Nav.Link eventKey="All" style={{ backgroundColor: '#4F4B7E', color: 'white', textAlign: 'center' }}>All</Nav.Link>
//               </Nav.Item>
//               <Nav.Item style={{ flex: '1' }}>
//                 <Nav.Link eventKey="removed" style={{ backgroundColor: '#FF0000', color: 'white', textAlign: 'center' }}>Removed</Nav.Link>
//               </Nav.Item>
//             </Nav>


//             {message.text && (
//           <div style={{ 
//             padding: "10px", 
//             backgroundColor: message.type === "success" ? "lightgreen" : "lightcoral", 
//             color: "black", 
//             margin: "10px 0",
//             borderRadius: "5px"
//           }}>
//             {message.text}
//           </div>
//         )}

//             <Tab.Content>
//               <Tab.Pane eventKey="All">
//                 <ReportPropertyBuyer properties={properties} onRemove={handleRemoveProperty} setProperties={setProperties} />
//               </Tab.Pane>
//               <Tab.Pane eventKey="removed">
//                 <RemovedProperties removedProperties={removedProperties} onUndo={handleUndoRemove} />
//               </Tab.Pane>
//             </Tab.Content>
//           </Col>
//         </Row>
//       </Tab.Container>
//     </div>
//   );
// };

// const ReportPropertyBuyer = ({ properties, onRemove, setProperties }) => {
//   const { phoneNumber } = useParams();
//   const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (!phoneNumber) {
  //     toast.error('Phone number is missing.');
  //     setLoading(false);
  //     return;
  //   }

  //   const fetchInterestedProperties = async () => {
  //     try {
  //       const apiUrl = `${process.env.REACT_APP_API_URL}/get-reportproperty-buyer`;  // Buyer API endpoint
  //       const response = await axios.get(apiUrl, {
  //         params: { postedPhoneNumber: phoneNumber }  // Send phoneNumber as a query parameter
  //       });

  //       // if (response.status === 200) {
  //       //   setProperties(response.data.reportPropertyRequestsData || []);  // Set properties data
  //       // }
        
  //       if (response.status === 200) {
  //         const transformedProperties = response.data.reportPropertyRequestsData.flatMap(property =>
  //           property.reportPropertyRequestersPhoneNumbers.map(interestedUser => ({
  //             ...property,
  //             interestedUser
  //           }))
  //         );

  //         setProperties(transformedProperties);
  //       }
  //       else {
  //         toast.error('No properties found for this buyer.');
  //       }
  //     } catch (error) {
  //       toast.error('Error fetching properties.');
  //     } finally {
  //       setLoading(false);  // Stop loading once data is fetched
  //     }
  //   };

  //   fetchInterestedProperties();
  // }, [phoneNumber]);

//   return (

// <div className="container" style={{fontFamily: "Inter, sans-serif",}}>
// {/* <h3 className="text-center">Properties</h3> */}
// <div className="row mt-4 rounded-4">
//   {properties.map((property) => (
//    <div className="row g-0 rounded-4" style={{ border: '1px solid #ddd', overflow: "hidden", background:"#EFEFEF" }}>
//    <div className="col-md-4 col-4 d-flex flex-column justify-content-between align-items-center">
//    <div className="text-white py-1 px-2 text-center" style={{ width: '100%', background: "#2F747F" }}>
// PUC- {property.ppcId}
// </div>
// <div
// style={{
// backgroundImage: property.photos && property.photos.length > 0
// ? `url("http://localhost:5000/${property.photos[0]}")`
// : `url("${pic}")`,
// backgroundSize: "cover",
// backgroundPosition: "center",
// backgroundRepeat: "no-repeat",
// width: "100%",
// height: "150px", // Adjust height as needed
// }}
// >
// <div style={{ position: "relative", width: "100%", height:'150px'}}>
// <div className="d-flex justify-content-between w-100" style={{ position: "absolute",
// bottom: "0px"}}>
// <span className="d-flex justify-content-center align-items-center" style={{ color:'#fff', background:`url(${myImage}) no-repeat center center`, fontSize:'12px', width:'50px' }}>
// <FaCamera className="me-1"/> 1
// </span>
// <span className="d-flex justify-content-center align-items-center" style={{ color:'#fff', background:`url(${myImage1}) no-repeat center center`, fontSize:'12px', width:'50px' }}>
// <FaEye className="me-1" />1
// </span>
// </div>
// </div>
// </div>


//    </div>
//    <div className="col-md-8 col-8 ps-2">
//     <div className="d-flex justify-content-between"><p className="m-0" style={{ color:'#5E5E5E' , fontWeight:'normal' }}>{property.propertyMode || 'N/A'}</p>
//     <p className="mb-0 ps-3 pe-3 text-center pt-1" style={{background:"#FF0000", color:"white", cursor:"pointer" , borderRadius: '0px 0px 0px 15px', fontSize:"12px"}} onClick={() => onRemove(property.ppcId, property.postedUserPhoneNumber)}>REMOVED</p>
//     </div>
//      <p className="fw-bold m-0" style={{ color:'#000000' }}>{property.propertyType || 'N/A'}</p>
//      <p className='m-0' style={{ color:'#5E5E5E'}}>{property.city || 'N/A'}</p>
//      <div className="card-body ps-2 m-0 pt-0 pe-2 d-flex flex-column justify-content-center">
//        <div className="row">
//          <div className="col-6 d-flex align-items-center mt-1 mb-1">
//            <FaRulerCombined className="me-2" color="#2F747F" /> <span style={{ fontSize:'13px', color:'#5E5E5E' , fontWeight:'medium' }}>{property.totalArea || 'N/A'}</span>
//          </div>
//          <div className="col-6 d-flex align-items-center mt-1 mb-1">
//            <FaBed className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#5E5E5E' }}>{property.bedrooms || 'N/A'}</span>
//          </div>
//          <div className="col-6 d-flex align-items-center mt-1 mb-1">
//            <FaUserAlt className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#5E5E5E' }}>{property.ownership || 'N/A'}</span>
//          </div>
//          <div className="col-6 d-flex align-items-center mt-1 mb-1">
//            <FaCalendarAlt className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#5E5E5E' }}>{property.bestTimeToCall || 'N/A'}</span>
//          </div>
         
//             <div className="col-12 d-flex flex-col align-items-center mt-1 mb-1">
//                          <h6 className="m-0">
//                          <span style={{ fontSize:'17px', color:'#2F747F', fontWeight:'bold', letterSpacing:"1px" }}> <FaRupeeSign className="me-2" color="#2F747F"/>{property.price ? property.price.toLocaleString('en-IN') : 'N/A'}
//                          </span> 
//                          <span style={{ color:'#2F747F', fontSize:'13px', marginLeft:"5px",fontSize:'11px',}}> 
//                          Negotiable                </span> 
//                            </h6>
//                         </div>
//                         {/* <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                                                                             <MdCall  className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#2E7480' }}>{property.interestedUser || 'N/A'}</span>
//                                                                           </div> */}
//          <p className="m-0 pt-2" style={{ color: "#2E7480" }}>
//   <a href={`tel:${property.interestedUser}`} style={{ textDecoration: 'none', color: '#2E7480' }}>
//     <MdCall className="me-2" color="#2F747F" /> {property.interestedUser || "N/A"}
//   </a>
// </p>
//         </div>
//       </div>
//     </div>
//  </div>
//   ))}
// </div>
// </div>
//   );
// };


// const RemovedProperties = ({ removedProperties, onUndo }) => {
//   return (

// <div className="container mt-5">
// <h3 className="text-center mb-4">Removed Properties</h3>
// <div className="row">
//   {removedProperties.length > 0 ? (
//     removedProperties.map((property) => (
// <div className="row g-0 rounded-4" style={{ border: '1px solid #ddd', overflow: "hidden", background:"#EFEFEF"}}>
//                  <div className="col-md-4 col-4 d-flex flex-column justify-content-between align-items-center">
//                  <div className="text-white py-1 px-2 text-center" style={{ width: '100%', background: "#2F747F" }}>
// PUC- {property.ppcId}
// </div>

// <div
// style={{
// backgroundImage: property.photos && property.photos.length > 0
// ? `url("http://localhost:5000/${property.photos[0]}")`
// : `url("${pic}")`,
// backgroundSize: "cover",
// backgroundPosition: "center",
// backgroundRepeat: "no-repeat",
// width: "100%",
// height: "180px", // Adjust height as needed
// }}
// >
// <div style={{ position: "relative", width: "100%", height:'180px'}}>
// <div className="d-flex justify-content-between w-100" style={{ position: "absolute",
// bottom: "0px"}}>
// <span className="d-flex justify-content-center align-items-center" style={{ color:'#fff', background:`url(${myImage}) no-repeat center center`, fontSize:'12px', width:'50px' }}>
// <FaCamera className="me-1"/> 1
// </span>
// <span className="d-flex justify-content-center align-items-center" style={{ color:'#fff', background:`url(${myImage1}) no-repeat center center`, fontSize:'12px', width:'50px' }}>
// <FaEye className="me-1" />1
// </span>
// </div>
// </div>
// </div>



//                  </div>
//                  <div className="col-md-8 col-8 p-0">
//                   <div className="d-flex justify-content-between"><p className="mb-1 fw-bold" style={{ color:'#5E5E5E' }}>{property.propertyMode || 'N/A'}</p>
//                   <p className="m-0 ps-3 pe-3" style={{background:"green", color:"white", cursor:"pointer", borderRadius: '0px 0px 0px 15px'}} onClick={() => onUndo(property.ppcId, property.postedUserPhoneNumber)}>UNDO</p>
//                   </div>
//                    <p className="fw-bold m-0" style={{ color:'#000000' }}>{property.propertyType || 'N/A'}</p>
//                    <p className=" fw-bold" style={{ color:'#5E5E5E'}}>{property.city || 'N/A'}</p>
//                    <div className="card-body ps-2 m-0 pt-0 pe-2 d-flex flex-column justify-content-center">
//                      <div className="row">
//                        <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                          <FaRulerCombined className="me-2" color="#2F747F" /> <span style={{ fontSize:'13px', color:'#5E5E5E' }}>{property.totalArea || 'N/A'}</span>
//                        </div>
//                        <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                          <FaBed className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#5E5E5E' }}>{property.bedrooms || 'N/A'}</span>
//                        </div>
//                        <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                          <FaUserAlt className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#5E5E5E' }}>{property.ownership || 'N/A'}</span>
//                        </div>
//                        <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                          <FaCalendarAlt className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#5E5E5E' }}>{property.bestTimeToCall || 'N/A'}</span>
//                        </div>
//                        <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                          <FaRupeeSign className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#2E7480' }}>{property.price || 'N/A'}</span>
//                        </div>
//                        <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                          <p className="m-0" style={{ color:'#2F747F', fontSize:'13px',fontWeight:"bold"}}> Negotiation: <span style={{ color:'#5E5E5E' }}>{property.negotiation || 'N/A'}</span></p>
//                        </div>
//                        <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                                                                            <MdCall  className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#2E7480' }}>{property.interestedUser || 'N/A'}</span>
//                                                                          </div>
//                       </div>
//                     </div>
//                   </div>
//                </div>
//     ))
//   ) : (
//     <div className="col-12 text-center">
//       <p>No removed properties found.</p>
//     </div>
//   )}
// </div>
// </div>
//   );
// };

// export default App;





















