import styles from "../styles/ItemDetail.module.css";
import { Link } from "react-router";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ detalleProd }) => {
  return (
    <div className={styles.divPrincipal}>
      <div className={styles.divSecundario}>
        <h5 className={styles.titulo}>{detalleProd?.title}</h5>
        <img
          className={styles.img}
          src={detalleProd?.thumbnail}
          alt={detalleProd?.title}
        />

        <p className={styles.descripcion}>{detalleProd?.description}</p>
        <p className={styles.precio}>${detalleProd?.price}</p>
        <div className={styles.stock}>
          <ItemCount detalleProd={detalleProd} />
          <p className={styles.texto}> {detalleProd?.stock} Stock disponible</p>
        </div>
        <Link to="/">
          <button className={styles.boton}>Volver</button>
        </Link>
      </div>
    </div>
  );
};
