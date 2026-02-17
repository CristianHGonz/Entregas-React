import { useNavigate } from "react-router";
import styles from "../styles/CartContainer.module.css";
import { CartList } from "./CartList";

export const CartContainer = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.divModal}>
      <div className={styles.divContenido}>
        <button onClick={() => navigate("/")}>x</button>
        <div className={styles.header}>
          <h4>TU COMPRA</h4>
        </div>
        <CartList />
        <button onClick={() => navigate("/CheckOut")}>Confirmar Compra</button>
      </div>
    </div>
  );
};
