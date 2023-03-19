import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LocationInfo = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://ip-api.com/json/');
      setLocation(response.data);
    };

    fetchData();
  }, []);

  if (!location) {
    return null;
  }

  const { query, country, countryCode } = location;

  return (
    <div style={{ marginTop: '10px', backgroundColor:"#EFEFEF", padding: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <img src={`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`} alt={`Flag of ${country}`} style={{ width: '60px', height: '40px',objectFit:"contain", marginRight: '10px' }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: 'bold' }}>{country}</span>
          <span>Your IP address is: {query}</span>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
