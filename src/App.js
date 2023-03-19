import React from 'react';
import LocationInfo from './LocationInfo';
import Logo from './img.jpeg'
const SplashPage = () => {
  const pageStyle = {
    background: '#F8F8F8',
    color: '#000000',
    textAlign: 'center',
    paddingTop: '50px',
    paddingBottom: '50px',
    paddingLeft: '20px',
    paddingRight: '20px',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const middlePanelStyle = {
    background: '#FFFFFF',
    padding: '30px',
    borderRadius: '10px',
    maxWidth: '800px',
    width: '100%',
    position: 'relative', // <-- Add this line
  };

  const headerStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const textContainerStyle = {
    marginBottom: '40px',
    lineHeight: '1.6',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const textLeftStyle = {
    textAlign: 'left',
    paddingLeft: '20px',
    paddingRight: '20px',
    marginBottom: '20px',
    maxWidth: '400px',
  };

  const textRightStyle = {
    textAlign: 'left',
    paddingLeft: '20px',
    paddingRight: '20px',
    marginBottom: '20px',
    maxWidth: '400px',
  };

  const vpnSpeedStyle = {
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const vpnInfo =
    'This network has a VPN installed for your safety and privacy. All your online activities will be kept private and secure.';

  const speedInfo = 'You should expect download and upload speeds of at least 50/100Mbps. You are browsing from:';

  return (
    <div style={pageStyle}>
      <div style={middlePanelStyle}>
        <h1 style={headerStyle}>Welcome to Our Guest Wifi Network</h1>
        <div style={textContainerStyle}>
          <div style={textLeftStyle}>
            <p>{vpnInfo}</p>
          </div>
          <div style={textRightStyle}>
            <p style={vpnSpeedStyle}>VPN and Speed Info</p>
            <p>{speedInfo}</p>
            <LocationInfo/>
          </div>
        </div>
        <p>Please enjoy your stay and let us know if you need any assistance.</p>
      </div>
    </div>
  );
};

export default SplashPage;
