import { useState } from "react";
import styles from "../styles/ItemCount.module.css";

export const ItemCount = () => {
  const [contar, setContar] = useState(0);

  const agregar = () => {
    setContar(contar + 1);
  };
  const restar = () => {
    if (contar <= 0) {
      alert("no puede tener menos de 0");
      return;
    }
    setContar(contar - 1);
  };
  const resetear = () => {
    setContar(0);
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
      <button onClick={resetear} className={styles.reset}>
        Resetear
      </button>
    </div>
  );
};
