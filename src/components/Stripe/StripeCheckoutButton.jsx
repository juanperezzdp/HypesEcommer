import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase.config/FireBase";
import "./Stripe.scss";
import LogoStripe from "../../img/LogoStripe.png";
import { BsTruck, BsBoxSeam } from "react-icons/bs";
import { FaHandHolding } from "react-icons/fa";

const StripeCheckoutButton = ({ amount, products }) => {
  const onToken = async (token) => {
    // Aquí puedes enviar el token al backend para crear el cargo en Stripe.
    // Por simplicidad, este ejemplo no incluirá la parte del backend.

    const productsCollection = collection(db, "userPay");
    await addDoc(productsCollection, {
      toker: token,
      products: products,
    });

    console.log("Token:", token);
    console.log(products);
    alert("Pago exitoso. Gracias por su compra!");
  };
  console.log(products);

  return (
    <section className="container-body-pay">
      <img className="logo-stripe" src={LogoStripe} alt="Stripe" />
      <p>
        Stripe es una plataforma de pagos en línea que permite a los negocios
        procesar transacciones de forma segura y fácil. Es una solución
        confiable y ampliamente utilizada para aceptar pagos con tarjeta de
        crédito y débito en línea.
      </p>
      <StripeCheckout
        token={onToken}
        stripeKey={
          "pk_test_51NHog0EsqPtDuOLSpzQYRYtykqPlWHiTGbDQwAkdL67vtstlODlD3MPYxEUU9zH0PyszGFUbyDyi08zstG3QROMT00vPoxlubD"
        }
        name="Hype"
        description="Producto(s) a comprar"
        amount={`${amount}00`}
        billingAddress={true}
        zipCode={true}
      >
        <button className="btn-pay">{`Realizar pago de $${amount.toLocaleString(
          "en-US"
        )} USD`}</button>
      </StripeCheckout>
      <div>
        <div className="container-pay-icon">
          <BsTruck className="pay-icon" />
          <p>Envio a nivel nacional</p>
        </div>
        <div className="container-pay-icon">
          <BsBoxSeam className="pay-icon" />
          <p>Disponible para retiro en tienda</p>
        </div>
        <div className="container-pay-icon">
          <FaHandHolding className="pay-icon" />
          <p>Ver disponibilidad</p>
        </div>
      </div>
    </section>
  );
};

export default StripeCheckoutButton;
