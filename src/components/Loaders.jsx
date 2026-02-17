import styles from "../styles/Loaders.module.css";
import { PropagateLoader } from "react-spinners";

export const Loaders = () => {
  return (
    <div className={styles.loaders}>
      <PropagateLoader color="#21651c" size={25} />
    </div>
  );
};
