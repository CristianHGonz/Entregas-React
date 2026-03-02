import styles from "../styles/CartContainer.module.css";
import { UseCart } from "../context/UseCart";
import DeleteIcon from "@mui/icons-material/Delete";
import { pink } from "@mui/material/colors";

export const CartItem = ({ item }) => {
  const { sumarCantidad, restarCantidad, eliminarProdCarrito } = UseCart();

  return (
    <div key={item.id} className={styles.productos}>
      <div className={styles.tachito}>
        <button onClick={() => eliminarProdCarrito(item)}>
          <DeleteIcon sx={{ color: pink[500] }} />
        </button>
      </div>
      <div className={styles.imgCarrito}>
        <img src={item.imagen} alt={item.titulo} className={styles.img} />
      </div>
      <div className={styles.titulo}>
        <h6>Producto: {item.nombre}</h6>
      </div>
      <div className={styles.descripcion}>
        <p>Descripcion: {item.descripcion}</p>
      </div>
      <div className={styles.cantidad}>
        <p> Cantidad {item.cantidad}</p>
      </div>
      <div className={styles.precioIndividual}>
        <p>c/u ${item.precio}</p>
      </div>
      <div className={styles.precioSubTotal}>
        <p>Sub-Total $ {item.precio * item.cantidad}</p>
      </div>
      <div className={styles.botones}>
        {/* aclaración hice el onclick sobre el div porque el area de click sobre el button era demaciado pequeña */}
        <div className={styles.suma} onClick={() => sumarCantidad(item.id)}>
          <button> +</button>
        </div>
        <div className={styles.resta} onClick={() => restarCantidad(item.id)}>
          <button>-</button>
        </div>
      </div>
    </div>
  );
};
