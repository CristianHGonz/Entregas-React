import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "../styles/ItemCount.module.css";

export const ItemCount = ({ detalleProd }) => {
  const [contar, setContar] = useState(1);

  const { addCarrito } = useContext(CartContext);

  const agregar = () => {
    setContar(contar + 1);
  };
  const restar = () => {
    if (contar === 1) {
      return;
    }
    setContar(contar - 1);
  };
  const fncAgregar = () => {
    addCarrito({ ...detalleProd, cantidad: contar });
  };

  return (
    <div>
      <p className={styles.p}>{contar}</p>
      <button onClick={agregar} className={styles.suma}>
        Agregar
      </button>
      <button onClick={restar} className={styles.resta}>
        Eliminar
      </button>
      <button onClick={fncAgregar} className={styles.agregar}>
        AGREGAR
      </button>
    </div>
  );
};
