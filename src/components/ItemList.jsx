import { Item } from "./Item";
import styles from "../styles/ItemListContainer.module.css";

import { Loaders } from "./Loaders";

export const ItemList = ({ getProducts = [] }) => {
  if (getProducts.length === 0) {
    return <Loaders />;
  }

  return (
    <div className={styles.divPrincipal}>
      {getProducts.map((prod) => (
        <Item prod={prod} key={prod.id} />
      ))}
    </div>
  );
};
