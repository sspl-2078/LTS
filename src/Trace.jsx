import React, { useState } from 'react';
import Img from './laug.webp';

const Trace = () => {
  const [showPopup, setShowPopup] = useState(false);

  const pagestyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    padding: '10px',
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '15px',
    width: '300px',
    height: '320px',
    border: 'solid black 2px',
    alignItems: 'center',
    gap: '5px',
  };

  const image = {
    width: '90px',
  };

  const p = {
    overflow: 'auto',
    height: '40px',
  };

  const button = {
    marginTop: '30px',
    textAlign: 'center',
    fontWeight: 'bolder',
  };

  const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    zIndex: '1000',
    width: '400px',
    textAlign: 'center',
  };

  const overlayStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '999',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginTop: '10px',
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px', // Increased space between buttons
    marginTop: '20px',
  };

  const buttonStyle = {
    flex: '1',
    padding: '10px 20px',
    border: '2px solid black', // Thicker border
    borderRadius: '8px', // Slightly more rounded corners
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  const submitButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#007bff',
    color: 'white',
    width: '90px'
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f44336',
    color: 'white',
    width:'90px'
  };

  const handleClaimClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="trace" style={pagestyle}>
      <div className="card" style={cardStyle}>
        <div className="photos">
          <img src={Img} alt="lost" style={image} />
        </div>
        <div className="details">
          <h3>Lost</h3>
          <p style={p}>
            Lorem ipsum dolor sit amet consectetur, adipisicing lorem20 elit. Officiis, tempore!
          </p>
          <h4>Uploaded by:</h4>
          <h4>Flight:</h4>
          <button style={button} onClick={handleClaimClick}>
            Claim
          </button>
        </div>
      </div>

      {showPopup && (
        <>
          <div style={overlayStyle} onClick={handleClosePopup}></div>
          <div style={popupStyle}>
            <h2>Claim Details</h2>
            <form style={formStyle}>
              <input type="text" placeholder="Passenger Name" style={inputStyle} required />
              <input type="email" placeholder="Email" style={inputStyle} required />
              <input type="tel" placeholder="Phone" style={inputStyle} required />
              <input type="text" placeholder="Ticket Number" style={inputStyle} required />
              <input type="text" placeholder="LTP No" style={inputStyle} required />
              <div style={buttonContainerStyle}>
                <button type="submit" style={submitButtonStyle}>
                  Submit
                </button>
                <button type="button" style={cancelButtonStyle} onClick={handleClosePopup}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Trace;
