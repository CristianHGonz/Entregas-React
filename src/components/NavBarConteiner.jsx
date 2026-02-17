import { useState, useEffect } from "react";
import { NavBar } from "./NavBar";
import { getCategorias } from "../firebase/db";

export const NavBarConteiner = () => {
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    getCategorias().then((cats) => {
      setCategoria(cats);
    });
  }, []);
  return <NavBar categoria={categoria} />;
};
