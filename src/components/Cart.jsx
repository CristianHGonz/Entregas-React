import { useNavigate } from "react-router";
import { UseCart } from "../context/UseCart";
import styles from "../styles/CartContainer.module.css";
import { CartList } from "./CartList";

export const Cart = () => {
  const navigate = useNavigate();

  const { totalDeCompra, vaciarCarrito, cart, confirmarCompra } = UseCart();
  if (cart.length === 0) {
    return (
      <div className={styles.divModal}>
        <div className={styles.divContenido}>
          <div className={styles.cerrar}>
            <h4>TU COMPRA</h4>
          </div>
          <h3 className={styles.carritoVacio}>
            UPS! <br />
            Aun no compraste nada <br />
            Tienes tu carrito vacio. <br />
            Hace click en el botoon volver para comprar.
          </h3>
          <button className={styles.volver} onClick={() => navigate("/")}>
            VOLVER
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.divModal}>
      <div className={styles.divContenido}>
        <div className={styles.cerrar}>
          <h4>TU COMPRA</h4>
          <button onClick={() => navigate("/")}>X</button>
        </div>

        <CartList />

        <h3 className={styles.total}>Total: ${totalDeCompra()}</h3>
        <button onClick={vaciarCarrito} className={styles.vaciar}>
          Vaciar carrito
        </button>
        <button
          className={styles.confirmar}
          onClick={() => confirmarCompra(navigate)}
        >
          Confirmar Compra
        </button>
      </div>
    </div>
  );
};
