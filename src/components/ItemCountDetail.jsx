import styles from "../styles/ItemCount.module.css";

export const ItemCountDetail = ({ contar, onSumar, onRestar, onAgregar }) => {
  return (
    <div>
      <p className={styles.p}>Cantidad: {contar}</p>

      <button onClick={onSumar} className={styles.suma}>
        SUMAR
      </button>

      <button onClick={onRestar} className={styles.resta}>
        RESTAR
      </button>

      <button onClick={onAgregar} className={styles.agregar}>
        AGREGAR
      </button>
    </div>
  );
};
