import { useState, React, createContext, useContext } from "react";

const CartContext = createContext([]);

export const UseCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [CartList, SetCartList] = useState([]);

  const AddItem = (item, cantidad) => {
    const index = CartList.findIndex((i) => i.item.id === item.id);

    if (index > -1 ) {
      const oldQy = CartList[index].cantidad;

      CartList.splice(index, 1);

      SetCartList([...CartList, { item, cantidad: cantidad + oldQy }]);
    } else {
      SetCartList([...CartList, { item, cantidad }]);
    }
  };

  const IconCart = () => {
    return CartList.reduce((acum, i) => acum + i.cantidad, 0);
  };

  const PriceTotal = () => {
    return CartList.reduce((acum, i) => acum + i.cantidad * i.item.price, 0);
  };

  const DelItem = (id) => {
    const items = CartList.filter((i) => i.item.id !== id);
    SetCartList(items);
  };

  const EmptyCart = () => {
    SetCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        CartList,
        AddItem,
        EmptyCart,
        DelItem,
        IconCart,
        PriceTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;