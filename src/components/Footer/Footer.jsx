import { AiFillInstagram } from "react-icons/ai";
import { RiFacebookBoxFill, RiWhatsappFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <section className="container-footer">
      <div className="logo-social">
        <div className="container-social-icon">
          <Link
            to="https://www.facebook.com/"
            className="container-transition-the-icon"
          >
            <RiFacebookBoxFill className="social-icon" />
          </Link>
          <Link
            to="https://www.instagram.com/"
            className="container-transition-the-icon"
          >
            <AiFillInstagram className="social-icon" />
          </Link>
          <Link
            to="https://web.whatsapp.com/"
            className="container-transition-the-icon"
          >
            <RiWhatsappFill className="social-icon" />
          </Link>
        </div>
      </div>
      <div className="container-contact">
        <ul>
          <h2>Contáctanos</h2>
          <li>Barranquilla (305) 306 5000</li>
          <li>Cartagena (305) 684 7000</li>
          <li>Bogotá (301) 333 6958</li>
          <li>Santa Marta (301) 485 6972</li>
          <li>Medellín (304) 684 1737</li>
        </ul>
      </div>
      <div className="container-collection">
        <h2>Colecciones</h2>
        <Link to="/juegosdesala">Juegos de sala</Link>
        <Link to="/camas">Camas</Link>
        <Link to="/sofa">Sofas</Link>
      </div>
    </section>
  );
}

export default Footer;
