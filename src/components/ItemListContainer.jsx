import { useState, useEffect } from "react";
import styles from "../styles/ItemListContainer.module.css";
import { ItemList } from "./ItemList";
import { useParams } from "react-router";
import { getAccesorios } from "../firebase/db";
import { Loaders } from "./Loaders";

export const ItemListContainer = () => {
  const [getProducts, setGetProducts] = useState([]);
  const { prodCat } = useParams();
  const [loading, setLoading] = useState(true);

  const cargarProductos = async () => {
    setLoading(true);
    try {
      await getAccesorios(prodCat, setGetProducts);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      cargarProductos();
    }, 2000);
  }, [prodCat]);

  if (loading) return <Loaders />;

  return (
    <div className={styles.zoomIn}>
      <ItemList getProducts={getProducts} />
    </div>
  );
};
