import Footer from "../../components/Footer/Footer";
import ImgCarousel from "../../components/ImgCarousel/ImgCarousel";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Img1 from "../../img/sala.png";
import Img2 from "../../img/Sofahome.jpg";
import ImgMobile1 from "../../img/img responsive/Sofa-reponsive.jpg";
import ImgMobile2 from "../../img/img responsive/sala.png";

function Sofa() {
  const img = [Img1, Img2];
  const imgMobile = [ImgMobile1, ImgMobile2];
  const slideDuration = 5000;
  const titletwo =
    "Un Sofá es excelente opción de decoración para tu sala de estar.";

  return (
    <>
      <Navbar />
      <ImgCarousel
        img={img}
        slideDuration={slideDuration}
        imgMobile={imgMobile}
        titletwo={titletwo}
      />
      <Products props={"juegos de sala"} />
      <Footer />
    </>
  );
}

export default Sofa;
