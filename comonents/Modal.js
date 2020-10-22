import React from "react";
 
const Popup = props => {
  return (
    <div className="popup-box">
        <div className="box">
          <h3>Edit your search</h3>
          <span className="close-icon" onClick={props.handleClose}>X</span>
          {props.content}
        </div>
    </div>
  );
};
 
export default Popup;