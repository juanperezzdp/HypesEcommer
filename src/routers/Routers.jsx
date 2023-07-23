import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "../components/Login/ProtectedRoute";
import { CartProvider } from "../context/cartContext";
import Home from "../pages/Home/Home";
import CreateProducts from "../pages/CreateProducts/CreateProducts";
import LoginPage from "../pages/LoginPage/LoginPage";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import Camas from "../pages/Camas/Camas";
import DetailsProducts from "../components/DetailsProducts/DetailsProducts";
import Sofa from "../pages/Sofa/Sofa";

function Routers() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/camas" element={<Camas />} />
          <Route path="/sofa" element={<Sofa />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/createproducts" element={<CreateProducts />} />
          <Route
            path="/shoppingcart"
            element={
              <ProtectedRoute>
                <ShoppingCart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/detailsproducts/:productId"
            element={<DetailsProducts />}
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default Routers;
