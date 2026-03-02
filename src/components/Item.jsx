import styles from "../styles/ItemListContainer.module.css";
import { useNavigate } from "react-router";

export const Item = ({ prod }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.divSecundario}>
      <h5 className={styles.titulo}>{prod.nombre}</h5>
      <div className={styles.divImg}>
        <img className={styles.img} src={prod.imagen} alt={prod.nombre} />
      </div>
      <p className={styles.categoria}>CATEGORÍA: {prod.categoria}</p>
      <p className={styles.descripcion}>{prod.descripcion}</p>
      <button
        className={styles.boton}
        onClick={() => navigate(`/detalle/${prod.id}`)}
      >
        MÁS INFO
      </button>
    </div>
  );
};
