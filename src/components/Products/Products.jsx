import { useEffect, useReducer, useState, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config/FireBase";
import "./CartStyle.scss";
import {
  CartProvider,
  cartReducer,
  CartContext,
} from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

function Products({ props }) {
  const { cartItems, dispatch, count, setCount } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const productsCollection = collection(db, props);

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollection);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const savedCount = localStorage.getItem("count");
    if (savedCount) {
      setCount(Number(savedCount));
    }

    getProducts();
  }, [productsCollection, setCount]);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });

    // Save cart data to localStorage
    const updatedCartItems = [...cartItems, product];
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCount(count + 1);
    localStorage.setItem("count", count + 1);
  };

  const handleDataClick = (product) => {
    navigate(`/detailsproducts/${product.id}`, {
      state: { detailData: product },
    });
  };

  return (
    <>
      {products.length > 0 ? (
        <>
          <CartProvider>
            <div className="container-wrap">
              {products.map((product) => {
                const discount =
                  (parseFloat(product.price) * parseFloat(product.discount)) /
                  100;
                const discountedPrice = parseFloat(product.price) - discount;
                const formattedDiscountedPrice =
                  discountedPrice.toLocaleString("es-CO");

                return (
                  <div className="container-pruducts" key={product.title}>
                    <div>
                      <img
                        className="container-img-products"
                        src={product.urls}
                        alt="Img"
                      />
                    </div>
                    <div className="container-products-title-price">
                      <div className="container-title-products">
                        <div className="container-title-description-price">
                          <h3>{product.title.toString()}</h3>
                          <p className="price">
                            $
                            {typeof product.price === "string" &&
                              parseFloat(product.price).toLocaleString("es-CO")}
                          </p>
                          <p className="total-price">
                            $ {formattedDiscountedPrice}
                          </p>
                        </div>
                        <p className="discount">-{product.discount}%</p>
                      </div>
                    </div>
                    <div className="container-btn-shopping">
                      <button
                        className="btn-shopping"
                        onClick={() => addToCart(product)}
                      >
                        Añadir al carrito
                      </button>
                      <button
                        className="btn-add"
                        onClick={() => handleDataClick(product)}
                      >
                        Ver detalles
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </CartProvider>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Products;
