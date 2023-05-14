import React from "react";
import "./stripeButton.styles.scss";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceStripe = price * 100;
  const publishableKey =
    "pk_test_51N6Cq0IQYSH9z8XLVMspAiFKCA0a1uJDyTrSnlY5XlRGwBiRvaDBNjEH6V6hKV81MF98Q5TbkIqmHdw1g9Zrf21V00ThuvYxgV";
  const Toks = (token) => {
    console.log(token);
    alert("payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Next Tag"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Cuz.svg"
      description={`Your Total Is:$${price}`}
      amount={priceStripe}
      panelLabel="Pay Now"
      token={Toks}
      stripeKey={publishableKey}
    />
  );
};
export default StripeButton;
