import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router";
import { CarWidget } from "./CarWidget";
import logo from "../assets/logo1.png";
import { useNavigate } from "react-router";

export const NavBar = ({ categoria }) => {
  const navigate = useNavigate();
  return (
    <div className={`${styles.navbar} navbar bg-base-100 shadow-sm`}>
      <div className="navbar-start">
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
        <ul className={styles.ul}>
          {categoria.map((cat) => (
            <li className={styles.li} key={cat}>
              <NavLink
                to={`/categoria/${cat}`}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? "underline underline-offset-4 decoration-2" : ""}`
                }
              >
                {cat}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <CarWidget />
      </div>
    </div>
  );
};
