import { Paper } from "@material-ui/core";
import React from "react";
import "../App.css";

function ItemCart({ totalQty, totalPrice, discount }) {
  console.log(totalPrice);

  return (
    <div className="ItemCart">
      <Paper elevation={5} className="cart-container">
        <div className="content">
          <p><b>Items      :  </b></p>
          <h5>{totalQty}</h5>
        </div>
        <div className="content">
          <p><b>Total Price :</b></p>
          <h5>{totalPrice}</h5>
        </div>
        <div className="content">
          <p><b>Discount :</b></p>
          <h5>{-discount}</h5>
        </div>
        <div className="content" style={{ backgroundColor: "gainsboro" }}>
          <p><h1><b>Order Total :</b></h1></p>
          <h1>{totalPrice - discount}</h1>
        </div>
      </Paper>
    </div>
  );
}

export default ItemCart;
