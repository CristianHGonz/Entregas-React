import { NavBarConteiner } from "./components/NavBarConteiner";
import { ItemListContainer } from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router";
import { ItemDetailConteiner } from "./components/ItemDetailConteiner";
import { Error404 } from "./components/Error404";

function App() {
  return (
    <BrowserRouter>
      <NavBarConteiner />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:prodCat" element={<ItemListContainer />} />
        <Route path="/detalle/:id" element={<ItemDetailConteiner />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
