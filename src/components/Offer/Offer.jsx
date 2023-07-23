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
    <section className="container-offer">
      <div
        className="container-offer-image"
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={() => handleMouseLeave(0)}
      >
        <img
          className="offer-image"
          src={isHovered[0] ? AndersonS : Anderson}
          alt="img"
        />
        {isHovered[0] && (
          <div className="conatiner-title-offer">
            <h2>Sofá Anderson 2 Puestos</h2>
            <p>
              Sofá de diseño cómodo y moderno, fabricado con espumas de
              poliuretano indeformables de diferentes densidades, con estructura
              interna de madera y tapizado con telas de alta calidad y
              resistencia. Se convierte en el aliado ideal para resaltar tus
              espacios.
            </p>
          </div>
        )}
      </div>
      <div
        className="container-offer-image"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={() => handleMouseLeave(1)}
      >
        <img
          className="offer-image"
          src={isHovered[1] ? OsloS : Oslo}
          alt="img"
        />
        {isHovered[1] && (
          <div className="conatiner-title-offer">
            <h2>Sofá Cama Oslo</h2>
            <p>
              El diseño exclusivo del sofá cama Oslo, cuenta con una tecnología
              de tijera o click clack que se activa por medio de la inclinación
              total del espaldar, ofrece 3 posiciones en la base del sofá y se
              convierte en cuestión de segundos en una cama de 170 cm de largo.
              Será la pieza hará resaltar los espacios de tu hogar.
            </p>
          </div>
        )}
      </div>
      <div
        className="container-offer-image"
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={() => handleMouseLeave(2)}
      >
        <img
          className="offer-image"
          src={isHovered[2] ? BostonS : Boston}
          alt="img"
        />
        {isHovered[2] && (
          <div className="conatiner-title-offer">
            <h2>Sofá Cama Boston 1.10 </h2>
            <p>
              Su diseño moderno y elegante, gracias a su innovador sistema logra
              convertirse en sofá cama en cuestión de segundos, alcanzando un
              largo de 180 cm. Ideal para optimizar tus espacios.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Offer;
