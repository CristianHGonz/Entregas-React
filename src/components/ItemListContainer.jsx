import { useState, useEffect } from "react";
import styles from "../styles/ItemListContainer.module.css";
import { ItemList } from "./ItemList";
import { useParams } from "react-router";

export const ItemListContainer = () => {
  const [getProducts, setGetProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { prodCat } = useParams();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      async function fetchData() {
        const url = prodCat
          ? `https://dummyjson.com/products/category/${prodCat}`
          : `https://dummyjson.com/products`;
        const response = await fetch(url);
        const data = await response.json();
        setGetProducts(data.products);
        setLoading(false);
      }
      fetchData();
    }, 2000);
  }, [prodCat]);

  return loading ? (
    <div className={styles.cargandoDiv}>
      <p className={styles.cargando}>CARGANDO PRODUCTOS...</p>
    </div>
  ) : (
    <ItemList getProducts={getProducts} />
  );
};
