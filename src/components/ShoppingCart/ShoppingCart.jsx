import { useEffect, useContext, useState } from "react";
import "../../components/Products/CartStyle.scss";
import IconCart from "../IconCart/IconCart";
import { CartContext } from "../../context/cartContext";
import "./ShoppingStyle.scss";
import Paypal from "../Paypal/Paypal";
import VoidCart from "../../pages/VoidCart/VoidCart";

function ShoppingCart() {
  const { cartItems, dispatch, count, setCount } = useContext(CartContext);
  const [totalValueInUSD, setTotalValueInUSD] = useState("0.00");

  const convertToUSD = (valueInCOP) => {
    const exchangeRateUSD = 3949.9742;
    const convertedValue = (valueInCOP / exchangeRateUSD).toFixed(2);
    setTotalValueInUSD(convertedValue);
  };

  const removeFromCart = (productId) => {
    const index = cartItems.findIndex((product) => product.id === productId);
    if (index !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(index, 1);

      dispatch({ type: "SET_CART_ITEMS", payload: updatedCartItems });
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

      const newCount = count - 1;
      setCount(newCount);
      localStorage.setItem("count", newCount);
    }
  };

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    const savedCount = localStorage.getItem("count");
    if (savedCartItems) {
      const parsedCartItems = JSON.parse(savedCartItems);
      dispatch({ type: "SET_CART_ITEMS", payload: parsedCartItems });
    }
    if (savedCount) {
      setCount(Number(savedCount));
    }
  }, [dispatch, setCount]);

  useEffect(() => {
    const totalValueInCOP = getUniqueProducts().reduce(
      (acc, product) => acc + getDiscountedPrice(product),
      0
    );

    convertToUSD(totalValueInCOP);
  }, [cartItems]);

  const getUniqueProducts = () => {
    const uniqueProducts = [];
    cartItems.forEach((product) => {
      const index = uniqueProducts.findIndex((item) => item.id === product.id);
      if (index === -1) {
        uniqueProducts.push({ ...product, quantity: 1 });
      } else {
        uniqueProducts[index].quantity++;
      }
    });
    return uniqueProducts;
  };

  const getTotalPrice = (productId) => {
    const totalPrice = cartItems
      .filter((product) => product.id === productId)
      .reduce((acc, product) => acc + parseFloat(product.price), 0);
    return totalPrice;
  };

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });

    // Save cart data to localStorage
    const updatedCartItems = [...cartItems, product];
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCount(count + 1);
    localStorage.setItem("count", count + 1);
  };

  const getDiscountedPrice = (product) => {
    const discount = (product.discount / 100) * getTotalPrice(product.id);
    const discountedPrice = getTotalPrice(product.id) - discount;
    return discountedPrice;
  };

  return (
    <>
      <IconCart />
      {cartItems && cartItems.length ? (
        <div className="container-shopping-wrap">
          {getUniqueProducts().map((product) => (
            <div className="container-shopping-pruducts" key={product.id}>
              <div>
                <img className="img-shopping" src={product.urls} alt="Img" />
              </div>
              <div>
                <div className="container-title-shopping">
                  <h3>{product.title.toString()}</h3>
                  <p className="price-shopping">
                    $
                    {typeof product.price === "string" &&
                      parseFloat(product.price).toLocaleString("es-CO")}
                  </p>
                  <p className="price-total-shopping">
                    ${getDiscountedPrice(product).toLocaleString("es-CO")}
                  </p>
                  <p className="quantity">Cantidad: {product.quantity}</p>
                  <div className="btn-container">
                    <button
                      className="btn-add-more"
                      onClick={() => addToCart(product)}
                    >
                      Añadir mas
                    </button>
                    <button
                      onClick={() => {
                        removeFromCart(product.id);
                      }}
                      className="btn-clean-shopping"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
              <p className="discount">-{product.discount}%</p>
            </div>
          ))}

          <Paypal totalValue={totalValueInUSD} invoice={"sofa"} />
        </div>
      ) : (
        <VoidCart />
      )}
    </>
  );
}

export default ShoppingCart;
