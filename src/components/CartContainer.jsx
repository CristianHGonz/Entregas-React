import styles from "../styles/CartContainer.module.css";
import { UseCart } from "../context/useCart";

export const CartContainer = () => {
  const { cart } = UseCart();
  return (
    <div className={styles.divModal}>
      <div className={styles.divContenido}>
        <h4>TU COMPRA</h4>

        {cart.map((item) => (
          <div key={item.id} className={styles.productos}>
            <div className={styles.imgCarrito}>
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <div className={styles.titulo}>
              <h6>{item.title}</h6>
            </div>
            <div className={styles.descripcion}>
              <h6>{item.description}</h6>
            </div>
            <div className={styles.cantidad}>
              <p> cantidad {item.cantidad}</p>
              <div className={styles.precio}>
                <p>${item.price}</p>
              </div>
            </div>
            <div className={styles.suma}>
              <p>+</p>
            </div>
            <div className={styles.resta}>
              <p>-</p>
            </div>
          </div>
        ))}

        <button>Confirmar Compra</button>
      </div>
    </div>
  );
};
