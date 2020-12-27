import { Paper } from "@material-ui/core";
import React from "react";
import "../App.css";

function ItemCart({ totalQty, totalPrice }) {
  return (
    <div className="ItemCart">
      <h2>Quantity : {totalQty}</h2>
      <h3>Price : {totalPrice}</h3>
    </div>
  );
}

export default ItemCart;
