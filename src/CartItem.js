
import React from "react";
import { UseCartContext } from "./CartContext";


const CartItem = ({ Item, Quantity }) => {
  const { DelItem } = UseCartContext();
  const { image, title, id, price } = Item;

  const Total = price * Quantity;

  return (
    <div>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <h4> {Quantity} Units</h4>
      <h4> U$D {Total}</h4>
      <button onClick={() => DelItem(id)}>X</button>
    </div>
  );
};

export default CartItem;