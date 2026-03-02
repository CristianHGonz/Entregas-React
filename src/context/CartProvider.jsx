import { useState } from "react";
import { CartContext } from "./CartContext";
import { useSnackbar } from "notistack";
import { validarStock } from "../firebase/db";

export const CartProvider = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();

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
  const totalDeCompra = () => {
    const total = cart.reduce(
      (acc, current) => acc + current.precio * current.cantidad,
      0,
    );
    return total;
  };
  const sumarCantidad = (id) => {
    const carritoActualizado = cart.map((item) => {
      if (item.id === id) {
        if (item.cantidad >= item.stock) {
          enqueueSnackbar("No hay suficiente stock disponible", {
            variant: "error",
          });
          return item;
        }

        return {
          ...item,
          cantidad: item.cantidad + 1,
        };
      }

      return item;
    });

    setCart(carritoActualizado);
  };
  const restarCantidad = (id) => {
    const carritoNuevo = [];

    for (let i = 0; i < cart.length; i++) {
      const producto = cart[i];

      if (producto.id === id) {
        const nuevaCantidad = producto.cantidad - 1;

        if (nuevaCantidad > 0) {
          carritoNuevo.push({
            ...producto,
            cantidad: nuevaCantidad,
          });
        }
      } else {
        carritoNuevo.push(producto);
      }
    }

    setCart(carritoNuevo);
  };
  const eliminarProdCarrito = (producto) => {
    const nuevoCarrito = cart.filter((item) => item.id !== producto.id);
    setCart(nuevoCarrito);
  };

  const vaciarCarrito = () => {
    setCart([]);
  };
  const confirmarCompra = async (navigate) => {
    try {
      for (let producto of cart) {
        await validarStock(producto.id, producto.cantidad);
      }

      navigate("/CheckOut");
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: "error",
      });
    }
  };

  return (
    <CartContext.Provider
      value={{
        addCarrito,
        totalDeProductos,
        totalDeCompra,
        cart,
        sumarCantidad,
        restarCantidad,
        eliminarProdCarrito,
        vaciarCarrito,
        confirmarCompra,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
