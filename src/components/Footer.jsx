import styles from "../styles/Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.derechos}>
        Copyright © 2024 - Todos los derechos reservados
      </p>
      <div className={styles.social}>
        <div className={styles.ig}>
          <a
            href="https://instagram.com/capriccio.accesorioss/"
            target="_blank"
          >
            <InstagramIcon sx={{ color: "#000000", fontSize: 35 }} />
          </a>
        </div>
        <div className={styles.wp}>
          <a href="https://wa.me/5493548404557" target="_blank">
            <WhatsAppIcon sx={{ color: "#000000", fontSize: 35 }} />
          </a>
        </div>
      </div>
    </footer>
  );
};
