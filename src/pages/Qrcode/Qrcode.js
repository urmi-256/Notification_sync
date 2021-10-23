import React from 'react';
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import "./Qrcode.css";

const Qrcode=()=>{
    return(
      <div className = "container">
      <div className ="container_head">
        <label>Notification Sync</label>
      </div>
      <div className = "qrcode_container">
    <QRCode
      id="123456"
      value="123456"
      size={290}
      level={"H"}
      includeMargin={true}
    />
    </div>
    </div>
    )
}
export default Qrcode;