import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "../styles/CarWidget.module.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const CarWidget = () => {
  return (
    <div className={styles.car}>
      <StyledBadge badgeContent={40} color="secondary" sx={{ fontSize: 40 }}>
        <ShoppingCartIcon />
      </StyledBadge>
    </div>
  );
};
