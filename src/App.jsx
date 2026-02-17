import styles from "./styles/Layout.module.css";
import { NavBarConteiner } from "./components/NavBarConteiner";
import { ItemListContainer } from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router";
import { ItemDetailConteiner } from "./components/ItemDetailConteiner";
import { Error404 } from "./components/Error404";
import { CartContainer } from "./components/CartContainer";
import { CheckOut } from "./components/CheckOut";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.layout}>
        <NavBarConteiner />

        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:prodCat" element={<ItemListContainer />} />
            <Route path="/tusCompras" element={<CartContainer />} />
            <Route path="/detalle/:id" element={<ItemDetailConteiner />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
