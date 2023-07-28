import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ImgCarousel from "../../components/ImgCarousel/ImgCarousel";
import Img1 from "../../img/Salahome.jpg";
import Img2 from "../../img/Dormitorio.jpg";
import Img3 from "../../img/Sofahome.jpg";
import Img4 from "../../img/sala.png";
import ImgMobile1 from "../../img/img responsive/Salahome.jpg";
import ImgMobile2 from "../../img/img responsive/Dormitorio.jpg";
import ImgMobile3 from "../../img/img responsive/Sofa-reponsive.jpg";
import ImgMobile4 from "../../img/img responsive/sala.png";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";
import Offer from "../../components/Offer/Offer";
import Experience from "../../components/Experience/Experience";
import "./Home.scss";

function Home() {
  const img = [Img1, Img2, Img3, Img4];
  const imgMobile = [ImgMobile1, ImgMobile2, ImgMobile3, ImgMobile4];
  const slideDuration = 5000;
  const titleOne = "Nueva llegada";
  const titletwo = "sofá confort de una nueva colección";
  const numberOfProductsToShow = 8;

  return (
    <div>
      <Navbar />
      <ImgCarousel
        img={img}
        slideDuration={slideDuration}
        imgMobile={imgMobile}
        titleOne={titleOne}
        titletwo={titletwo}
      />
      <Offer />
      <div className="container-title-home">
        <h1 className="title-home">Camas</h1>
      </div>
      <Products props={"camas"} productCount={numberOfProductsToShow} />
      <div className="container-title-home">
        <h1 className="title-home">Sofas</h1>
      </div>
      <Products props={"sofa"} productCount={numberOfProductsToShow} />
      <div className="container-title-home">
        <h1 className="title-home">Juego de comedor</h1>
      </div>
      <Products
        props={"juego de comedor"}
        productCount={numberOfProductsToShow}
      />

      <Experience />
      <Footer />
    </div>
  );
}

export default Home;
