import { UseCart } from "../context/useCart";
import { ordenCompra } from "../firebase/db";
import { serverTimestamp } from "firebase/firestore";

export const CheckOut = () => {
  const { cart } = UseCart();
  const mandarCompra = (e) => {
    e.preventDefault();
    const form = e.target;
    const nombre = form.nombre.value;
    const direccion = form.direccion.value;
    const email = form.email.value;
    const contacto = form.contacto.value;

    ordenCompra({
      nombre,
      direccion,
      email,
      contacto,
      cart,
      time: serverTimestamp(),
    });
  };
  return (
    <div>
      <form onSubmit={mandarCompra}>
        <legend> TU COMPRA </legend>
        <label> Nombre Completo: </label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Bichito de luz"
        />
        <br />
        <label>Direccion:</label>
        <input
          type="text"
          name="direccion"
          id="direccion"
          placeholder="Av Siempre Viva 573"
        />
        <br />
        <label> Email: </label>
        <input type="email" name="Email" id="email" placeholder="mi@mail.com" />
        <br />
        <label> Contacto: </label>
        <input
          type="number"
          name="contacto"
          id="contacto"
          placeholder="5491150403028"
        />
        <br />
        <button>CONFIRMAR</button>

        <button>CANCELAR</button>
      </form>
    </div>
  );
};
