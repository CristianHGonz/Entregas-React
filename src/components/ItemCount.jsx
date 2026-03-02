import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useSnackbar } from "notistack";
import { ItemCountDetail } from "./ItemCountDetail";

export const ItemCount = ({ detalleProd }) => {
  const [contar, setContar] = useState(1);
  const { addCarrito } = useContext(CartContext);
  const { enqueueSnackbar } = useSnackbar();

  const agregar = () => {
    if (contar < detalleProd.stock) {
      setContar((prev) => prev + 1);
    } else {
      enqueueSnackbar("No hay stock suficiente", {
        variant: "error",
      });
    }
  };

  const restar = () => {
    if (contar > 1) {
      setContar((prev) => prev - 1);
    }
  };

  const agregarAlCarrito = () => {
    if (contar > detalleProd.stock) {
      enqueueSnackbar("No hay suficiente stock disponible", {
        variant: "error",
      });
      return;
    }

    addCarrito({ ...detalleProd, cantidad: contar });

    enqueueSnackbar(`Agregaste ${contar} ${detalleProd.nombre} al carrito`, {
      variant: "success",
    });
  };

  return (
    <ItemCountDetail
      contar={contar}
      onSumar={agregar}
      onRestar={restar}
      onAgregar={agregarAlCarrito}
    />
  );
};
