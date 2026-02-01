import styles from "../styles/NavBar.module.css";
import { Link } from "react-router";
import { CarWidget } from "./CarWidget";
import logo from "../assets/logo1.png";

export const NavBar = ({ categoria }) => {
  return (
    <div className={`${styles.navbar} navbar bg-base-100 shadow-sm`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <p>CATEGORIAS</p>
            <ul className={`p-2 ${styles.ulResponsive}`}>
              {categoria.map((cat) => (
                <li className={`${styles.liResponsive}`} key={cat}>
                  <Link
                    className={styles.linkResponsive}
                    to={`/categoria/${cat}`}
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </ul>
        </div>
        <img className={styles.logo} src={logo} alt="logo empresa" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary className={styles.cat}>CATEGORIAS</summary>
              <ul className={styles.ul}>
                {categoria.map((cat) => (
                  <li className={styles.li} key={cat}>
                    <Link className={styles.link} to={`/categoria/${cat}`}>
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <CarWidget />
      </div>
    </div>
  );
};
