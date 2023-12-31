import Footer from "../../components/Footer/Footer";
import ImgCarousel from "../../components/ImgCarousel/ImgCarousel";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Img1 from "../../img/cama-abatible.jpg";
import Img2 from "../../img/dormitorio-paredes-madera-oscura.jpg";
import ImgMobile1 from "../../img/img responsive/dormitorio-movil-.jpg";
import ImgMobile2 from "../../img/img responsive/dormitorio-movil-2.jpg";

function Camas() {
  const img = [Img1, Img2];
  const imgMobile = [ImgMobile1, ImgMobile2];
  const slideDuration = 5000;
  const titletwo = "Camas, Base Camas y Cabeceros";

  return (
    <>
      <Navbar />
      <ImgCarousel
        img={img}
        slideDuration={slideDuration}
        imgMobile={imgMobile}
        titletwo={titletwo}
      />
      <Products props={"camas"} />
      <Footer />
    </>
  );
}

export default Camas;
