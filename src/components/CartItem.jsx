import styles from "../styles/CartContainer.module.css";

export const CartItem = ({ item }) => {
  return (
    <div key={item.id} className={styles.productos}>
      <div className={styles.imgCarrito}>
        <img src={item.imagen} alt={item.titulo} />
      </div>
      <div className={styles.titulo}>
        <h6>{item.titulo}</h6>
      </div>
      <div className={styles.descripcion}>
        <h6>{item.descripcion}</h6>
      </div>
      <div className={styles.cantidad}>
        <p> cantidad {item.cantidad}</p>
        <div className={styles.precio}>
          <p>${item.precio}</p>
        </div>
      </div>
      <div className={styles.suma}>
        <p>+</p>
      </div>
      <div className={styles.resta}>
        <p>-</p>
      </div>
    </div>
  );
};

<button>Confirmar Compra</button>;
