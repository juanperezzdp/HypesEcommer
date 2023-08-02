import Footer from "../../components/Footer/Footer";
import ImgCarousel from "../../components/ImgCarousel/ImgCarousel";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Img1 from "../../img/juegodesala1.jpg";
import Img2 from "../../img/juegodesala2.jpg";
import ImgMobile1 from "../../img/img responsive/1-comedor-estilo-nordico.jpg";
import ImgMobile2 from "../../img/img responsive/2-comedor.jpg";

function JuegosDeSala() {
  const img = [Img1, Img2];
  const imgMobile = [ImgMobile1, ImgMobile2];
  const slideDuration = 5000;
  const titletwo =
    "Un juego de comedor acorde al espacio que ocupará en tu casa";

  return (
    <>
      <Navbar />
      <ImgCarousel
        img={img}
        slideDuration={slideDuration}
        imgMobile={imgMobile}
        titletwo={titletwo}
      />
      <Products props={"sofa"} />
      <Footer />
    </>
  );
}

export default JuegosDeSala;
