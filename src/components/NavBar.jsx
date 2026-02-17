import styles from "../styles/NavBar.module.css";
import { Link } from "react-router";
import { CarWidget } from "./CarWidget";
import logo from "../assets/logo1.png";
import { useNavigate } from "react-router";

export const NavBar = ({ categoria }) => {
  const navigate = useNavigate();
  return (
    <div className={`${styles.navbar} navbar bg-base-100 shadow-sm`}>
      <div className="navbar-start">
        {" "}
        <img
          className={styles.logo}
          src={logo}
          alt="logo empresa"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="navbar-center flex flex-col  lg:flex">
        {/* <ul className="menu menu-horizontal px-1"> */}
        {/* <li> */}
        {/* <details> */}
        {/* <summary className={styles.cat}>CATEGORIAS</summary> */}
        <ul className={styles.ul}>
          {categoria.map((cat) => (
            <li className={styles.li} key={cat}>
              <Link className={styles.link} to={`/categoria/${cat}`}>
                {cat}
              </Link>
            </li>
          ))}
        </ul>
        {/* </details> */}
        {/* </li>
        </ul> */}
      </div>
      <div className="navbar-end">
        <CarWidget />
      </div>
    </div>
  );
};
