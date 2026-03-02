import styles from "../styles/CompraExitosa.module.css";
export const CompraExitosa = ({ id }) => {
  return (
    <div className={styles.divModal}>
      <div className={styles.divContenido}>
        <h3 className={styles.exitosa}>Muchas gracias por tu compra</h3>
        <p className={styles.idCompra}>
          El ID de tu compra es: <strong>{id}</strong>
          <br />
          Ante cualquier duda puedes llamar a 0800-123-PEPITO
        </p>
        <div className={styles.cerrar}>
          <p className={styles.segundos}>
            Serás dirigido a la página principal en unos segundos...
          </p>
        </div>
      </div>
    </div>
  );
};
