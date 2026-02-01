import styles from "../styles/ItemListContainer.module.css";
import { useNavigate } from "react-router";

export const Item = ({ prod }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.divSecundario}>
      <h5 className={styles.titulo}>{prod.title}</h5>
      <img className={styles.img} src={prod.thumbnail} alt={prod.title} />
      <p>CATEGORÍA: {prod.category}</p>
      <p className={styles.descripcion}>{prod.description}</p>
      <button
        className={styles.boton}
        onClick={() => navigate(`/detalle/${prod.id}`)}
      >
        MÁS INFO
      </button>
    </div>
  );
};
