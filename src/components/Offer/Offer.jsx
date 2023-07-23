import React, { useState } from "react";
import Anderson from "../../img/offer/anderson.png";
import AndersonS from "../../img/offer/sofa-anderson-2p-bolena-negro.png";
import Oslo from "../../img/offer/Oslo.png";
import OsloS from "../../img/offer/Sofa-cama-Oslo-bolena-chocolate.png";
import Boston from "../../img/offer/boston.jpg";
import BostonS from "../../img/offer/sofa-cama-boston-2P-bolena-plomo.png";
import "./Offer.scss";

function Offer() {
  const [isHovered, setIsHovered] = useState([false, false, false]);

  const handleMouseEnter = (index) => {
    const newHoveredState = [...isHovered];
    newHoveredState[index] = true;
    setIsHovered(newHoveredState);
  };

  const handleMouseLeave = (index) => {
    const newHoveredState = [...isHovered];
    newHoveredState[index] = false;
    setIsHovered(newHoveredState);
  };

  return (
    <div className="container-offer">
      <img
        className="offer-image"
        style={{
          width: "20rem",
        }}
        src={isHovered[0] ? AndersonS : Anderson}
        alt="img"
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={() => handleMouseLeave(0)}
      />
      <img
        className="offer-image"
        style={{
          width: "20rem",
        }}
        src={isHovered[1] ? OsloS : Oslo}
        alt="img"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={() => handleMouseLeave(1)}
      />
      <img
        className="offer-image"
        style={{
          width: "20rem",
        }}
        src={isHovered[2] ? BostonS : Boston}
        alt="img"
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={() => handleMouseLeave(2)}
      />
    </div>
  );
}

export default Offer;
