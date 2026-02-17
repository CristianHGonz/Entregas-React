import styles from "../styles/ItemDetail.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ItemDetail } from "./ItemDetail";
import { obtenerAccesorio } from "../firebase/db";
import { Loaders } from "./Loaders";

export const ItemDetailConteiner = () => {
  const { id } = useParams();
  const [detalleProd, setDetalleProd] = useState();
  const [loading, setLoading] = useState(true);

  const cargarProducto = async () => {
    setLoading(true);

    try {
      const data = await obtenerAccesorio(id);
      setDetalleProd(data);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener el accesorio:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      cargarProducto();
    }, 2000);
  }, [id]);

  if (loading) return <Loaders />;
  return (
    <div className={styles.zoomIn}>
      <ItemDetail detalleProd={detalleProd} />;
    </div>
  );
};
