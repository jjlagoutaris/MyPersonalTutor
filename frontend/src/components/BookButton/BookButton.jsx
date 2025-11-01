import React, { useState } from "react";
import "./BookButton.scss";

const BookButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpen = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  return (
    <>
      <button className="book-button" onClick={handleOpen}>
        Book A Free 15-Minute Consultation!
      </button>

      {showPopup && (
        <div className="popup-overlay" onClick={handleClose}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button className="close-button" onClick={handleClose}>
              ✕
            </button>
            <iframe
              src="https://calendly.com/john-yourpersonalprep/30min"
              width="100%"
              height="600"
              frameBorder="0"
              title="Book Free Consultation"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default BookButton;
