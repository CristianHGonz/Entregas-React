import styles from "../styles/ItemDetail.module.css";
import { Link } from "react-router";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ detalleProd }) => {
  return (
    <div className={styles.divPrincipal}>
      <div className={styles.divSecundario}>
        <h5 className={styles.titulo}>{detalleProd?.nombre}</h5>
        <div className={styles.img}>
          <img
            className={styles.imgProducto}
            src={detalleProd?.imagen}
            alt={detalleProd?.nombre}
          />
        </div>

        <p className={styles.descripcion}>{detalleProd?.descripcion}</p>
        <p className={styles.precio}>${detalleProd?.precio}</p>
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
