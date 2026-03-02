import styles from "./styles/Layout.module.css";
import { NavBarConteiner } from "./components/NavBarConteiner";
import { ItemListContainer } from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router";
import { ItemDetailConteiner } from "./components/ItemDetailConteiner";
import { Error404 } from "./components/Error404";
import { Cart } from "./components/Cart";
import { CheckOut } from "./components/CheckOut";
import { Footer } from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className={styles.navbar}>
        <NavBarConteiner />

        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:prodCat" element={<ItemListContainer />} />
            <Route path="/tusCompras" element={<Cart />} />
            <Route path="/detalle/:id" element={<ItemDetailConteiner />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
