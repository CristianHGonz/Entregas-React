import { Link } from "react-router";
import styles from "../styles/Error404.module.css";
export const Error404 = () => {
  return (
    <div className={styles.error}>
      <h3 className={styles.ups}>Ups! </h3>
      <p className={styles.texto}>Enlace no encontrado</p>
      <p className={styles.toca}>
        {" "}
        Toca "volver" para ir a la pagina principal
      </p>
      <Link className={styles.btn} to="/">
        <button>Volver</button>
      </Link>
    </div>
  );
};
