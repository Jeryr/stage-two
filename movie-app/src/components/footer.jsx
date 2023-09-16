import React from 'react'
import Twitter from '../assets/assets/twitter.svg'
import Insta from "../assets/assets/instagram.svg";
import Fb from "../assets/assets/facebook.svg";
import Youtube from "../assets/assets/youtube.svg";

function Footer() {
  return (
    <>
      <div className="icons">
        <img src={Fb} className="icon" alt="Facebook icon" />
        <img src={Insta} alt="Instagram icon" className="icon" />
        <img src={Twitter} alt="Twitter icon" className="icon" />
        <img src={Youtube} alt="Youtube icon" className="icon" />
      </div>
      <div className="conditions">
        <p className="condition">Conditions of use</p>
        <p className="condition">Privacy & Policy</p>
        <p className="condition">press Room</p>
      </div>
      <p id='cc'>© 2023 MovieBox by Aghedo Allison Aisosa</p>
    </>
  );
}

export default Footer