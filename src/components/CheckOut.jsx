import { useState } from "react";
import { useNavigate } from "react-router";
import { UseCart } from "../context/useCart";
import { ordenCompra, descontarProducto } from "../firebase/db";
import { serverTimestamp } from "firebase/firestore";
import { useSnackbar } from "notistack";
import { CompraExitosa } from "./CompraExitosa";
import { CheckOutDetail } from "./CheckOutDetail";

export const CheckOut = () => {
  const navigate = useNavigate();
  const { cart, vaciarCarrito } = UseCart();
  const { enqueueSnackbar } = useSnackbar();
  const [compraId, setCompraId] = useState(null);

  const mandarCompra = async (e) => {
    e.preventDefault();
    const form = e.target;

    const datos = {
      nombre: form.nombre.value,
      direccion: form.direccion.value,
      localidad: form.localidad.value,
      email: form.email.value,
      contacto: form.contacto.value,
    };

    if (Object.values(datos).some((v) => !v)) {
      enqueueSnackbar("Completá todos los campos obligatorios", {
        variant: "warning",
      });
      return;
    }

    try {
      for (let producto of cart) {
        await descontarProducto(producto.id, producto.cantidad);
      }

      const id = await ordenCompra({
        ...datos,
        cart,
        time: serverTimestamp(),
      });

      setCompraId(id);
      vaciarCarrito();

      setTimeout(() => navigate("/"), 10000);
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: "error",
      });
    }
  };

  if (compraId) {
    return <CompraExitosa id={compraId} />;
  }

  return (
    <CheckOutDetail
      mandarFormulario={mandarCompra}
      cancelar={() => navigate("/tusCompras")}
    />
  );
};
