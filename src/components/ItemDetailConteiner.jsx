import styles from "../styles/ItemDetail.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailConteiner = () => {
  const [detalleProd, setDetalleProd] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      async function fetchDetalleProd() {
        const detalleRecibido = await fetch(
          `https://dummyjson.com/products/${id}`,
        );
        const detalle = await detalleRecibido.json();
        setDetalleProd(detalle);
        setLoading(false);
      }
      fetchDetalleProd();
    }, 1000);
  }, [id]);

  return loading ? (
    <div className={styles.cargandoDiv}>
      <p className={styles.cargando}>CARGANDO DETALLE...</p>
    </div>
  ) : (
    <ItemDetail detalleProd={detalleProd} />
  );
};
