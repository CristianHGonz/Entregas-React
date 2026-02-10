import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addCarrito = (product) => {
    const isInCart = cart.some((item) => item.id === product.id);
    if (!isInCart) {
      setCart([...cart, product]);
    } else {
      const copiaCarrito = cart.map((item) => {
        if (item.id === product.id)
          return {
            ...item,
            cantidad: item.cantidad + product.cantidad,
          };
        return item;
      });
      setCart(copiaCarrito);
    }
  };

  const totalDeProductos = () => {
    const totales = cart.reduce((acc, current) => acc + current.cantidad, 0);
    return totales;
  };

  return (
    <CartContext.Provider value={{ addCarrito, totalDeProductos, cart }}>
      {children}
    </CartContext.Provider>
  );
};
