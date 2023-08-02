import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function Pay() {
  return (
    <div>
      <div style={{ width: "20rem", height: "4rem" }}>
        <Navbar />
      </div>
      <ShoppingCart />
      <Footer />
    </div>
  );
}

export default Pay;
