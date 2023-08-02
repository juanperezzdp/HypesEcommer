import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "../components/Login/ProtectedRoute";
import { CartProvider } from "../context/cartContext";
import Home from "../pages/Home/Home";
import CreateProducts from "../pages/CreateProducts/CreateProducts";
import LoginPage from "../pages/LoginPage/LoginPage";
import Camas from "../pages/Camas/Camas";
import DetailsProducts from "../components/DetailsProducts/DetailsProducts";
import Sofa from "../pages/Sofa/Sofa";
import Pay from "../pages/Pay/Pay";
import JuegosDeSala from "../pages/Juegos de sala/JuegosDeSala";

function Routers() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/camas" element={<Camas />} />
          <Route path="/sofa" element={<Sofa />} />
          <Route path="/juegosdesala" element={<JuegosDeSala />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/createproducts" element={<CreateProducts />} />
          <Route
            path="/pay"
            element={
              <ProtectedRoute>
                <Pay />
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
