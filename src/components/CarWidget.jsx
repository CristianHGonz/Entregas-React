import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "../styles/CarWidget.module.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const CarWidget = () => {
  const { totalDeProductos } = useContext(CartContext);
  const productosTotales = totalDeProductos();
  const navigate = useNavigate();

  return (
    <div className={styles.car}>
      <button onClick={() => navigate("/tusCompras")}>
        <StyledBadge
          badgeContent={productosTotales}
          color="secondary"
          sx={{ fontSize: 40 }}
        >
          <ShoppingCartIcon fontSize="medium" />
        </StyledBadge>
      </button>
    </div>
  );
};
