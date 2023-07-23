import React from "react";
import { BsShieldFillCheck, BsFillPatchCheckFill } from "react-icons/bs";
import { GiColombia } from "react-icons/gi";
import "./Experience.scss";

function Experience() {
  return (
    <section className="container-experience">
      <div className="experience">
        <BsShieldFillCheck className="experience-icon" />
        <h2>39 años de experiencia</h2>
      </div>
      <div className="experience">
        <BsFillPatchCheckFill className="experience-icon" />
        <h2>Garantía certificada</h2>
      </div>
      <div className="experience">
        <GiColombia className="experience-icon" />
        <h2>Empresa Colombiana</h2>
      </div>
    </section>
  );
}

export default Experience;
