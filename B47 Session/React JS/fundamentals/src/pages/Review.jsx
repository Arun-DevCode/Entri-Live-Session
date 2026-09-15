import React from "react";

function Review() {
  function PaymentHandler(event) {
    console.log(event);
    console.log("Payment Success...");
  }
  return (
    <button
      onClick={(event) => PaymentHandler(event)}
      className="bg-emerald-500 px-5 py-2.5 rounded text-white m-12"
    >
      Pay Now
    </button>
  );
}

export default Review;
