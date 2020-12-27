import { Paper } from "@material-ui/core";
import React from "react";
import "../App.css";

function ItemCart({ totalQty, totalPrice, discount }) {
  console.log(totalPrice);

  return (
    <div className="ItemCart">
      <Paper elevation={5} className="cart-container">
        <div className="content">
          <p>Quantity :</p>
          <h5>{totalQty}</h5>
        </div>
        <div className="content">
          <p>Total Price :</p>
          <h5>{totalPrice}</h5>
        </div>
        <div className="content">
          <p>Discount :</p>
          <h5>{discount}</h5>
        </div>
        <div className="content" style={{ backgroundColor: "gainsboro" }}>
          <p>Order Total :</p>
          <h5>{totalPrice - discount}</h5>
        </div>
      </Paper>
    </div>
  );
}

export default ItemCart;
