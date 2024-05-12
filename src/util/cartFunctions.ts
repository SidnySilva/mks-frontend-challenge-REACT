// cartFunctions.ts
import { useState } from "react";
import { IProducts } from "../interfaces/interfaces";

export const useCart = () => {
  const [cartItems, setCartItems] = useState<IProducts[]>([]);

  const addItemToCart = (product: IProducts) => {
    setCartItems([...cartItems, product]);
  };

  const removeItemFromCart = (productId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const itemQtd = (productId: number) => {
    const result = cartItems.filter((item) => item.id === productId);
    return result ? result.length : 0;
  };

  const removeOneItemFromCart = (productId: number) => {
    const index = cartItems.findIndex((item) => item.id === productId);
    if (index !== -1) {
      const newCartItems = [...cartItems];
      newCartItems.splice(index, 1);
      setCartItems(newCartItems);
    }
  };
  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    itemQtd,
    clearCart,
    addItemToCart,
    removeItemFromCart,
    removeOneItemFromCart,
  };
};
