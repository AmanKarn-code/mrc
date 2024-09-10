import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import "./Pages-css/Services.css";

export const Services = () => {
  // State to store the service data
  const [serviceData, setServiceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch service data from backend when component mounts
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:3000/services");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // console.log("Fetched data:", data);
        
        if (Array.isArray(data)) {
          setServiceData(data);
        } else if (typeof data === 'object' && data !== null) {
          // If data is an object, try to find an array property
          const arrayData = Object.values(data).find(Array.isArray);
          if (arrayData) {
            setServiceData(arrayData);
          } else {
            throw new Error("No array found in the response");
          }
        } else {
          throw new Error("Unexpected data format");
        }
      } catch (error) {
        console.error("Error fetching service data:", error);
        setError(error.message);
        setServiceData([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchServices();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Navbar />
      <div className="services">
        <h2 className="section-title">Services</h2>
      </div>
      <div className="box-wrapper">
        {serviceData.length > 0 ? (
          serviceData.map((service, index) => (
            <figure className="shape-box shape-box_half" key={index}>
              <img
                src="https://images.unsplash.com/photo-1553390774-b4822481c894?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
                alt={service.service}
              />
              <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
              <figcaption>
                <div className="show-cont">
                  <h3 className="card-no">{index + 1}</h3>
                  <h4 className="card-main-title">{service.service}</h4>
                </div>
                <p className="card-content">{service.description}</p>
                <p className="read-more-btn">{service.provider}</p>
                <p className="price">${service.price}</p>
              </figcaption>
              <span className="after"></span>
            </figure>
          ))
        ) : (
          <p>No services available</p>
        )}
      </div>
    </>
  );
};