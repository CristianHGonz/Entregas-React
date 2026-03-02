import styles from "../styles/CheckOut.module.css";

export const CheckOutDetail = ({ mandarFormulario, cancelar }) => {
  return (
    <div className={styles.divModal}>
      <form className={styles.formulario} onSubmit={mandarFormulario}>
        <legend className={styles.tuCompra}>Datos Envio/Facturación</legend>

        <div className={styles.campo}>
          <label htmlFor="nombre">Nombre Completo:</label>
          <input
            className={styles.input}
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Bichito de luz"
          />
        </div>

        <div className={styles.campo}>
          <label htmlFor="direccion">Dirección:</label>
          <input
            className={styles.input}
            type="text"
            name="direccion"
            id="direccion"
            placeholder="Av Siempre Viva 573"
          />
        </div>

        <div className={styles.campo}>
          <label htmlFor="localidad">Localidad:</label>
          <input
            className={styles.input}
            type="text"
            name="localidad"
            id="localidad"
            placeholder="Springfield"
          />
        </div>

        <div className={styles.campo}>
          <label htmlFor="email">Email:</label>
          <input
            className={styles.input}
            type="email"
            name="email"
            id="email"
            placeholder="mi@mail.com"
          />
        </div>

        <div className={styles.campo}>
          <label htmlFor="contacto">Contacto:</label>
          <input
            className={styles.input}
            type="number"
            name="contacto"
            id="contacto"
            placeholder="5491150403028"
          />
        </div>

        <div className={styles.botones}>
          <button className={styles.enviar} type="submit">
            CONFIRMAR
          </button>

          <button className={styles.cancelar} onClick={cancelar} type="button">
            CANCELAR
          </button>
        </div>
      </form>
    </div>
  );
};
