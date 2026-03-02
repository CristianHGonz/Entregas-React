import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import App from "./App";
import { CartProvider } from "./context/CartProvider.jsx";
import { SnackbarProvider } from "notistack";
import Grow from "@mui/material/Grow";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SnackbarProvider
      hideIconVariant
      maxSnack={2}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      TransitionComponent={Grow}
    >
      <CartProvider>
        <App />
      </CartProvider>
    </SnackbarProvider>
  </StrictMode>,
);
