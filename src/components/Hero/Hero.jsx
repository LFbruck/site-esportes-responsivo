import styles from "./Hero.module.css";
import { useState } from "react";

export default function Hero() {
  const [zoomAtivo, setZoomAtivo] = useState(false);

  return (
    <section className={`${styles.hero} ${zoomAtivo ? styles.zoom : ""}`}>
      <h1 className={styles.titulo}>
        Bem-vindo ao <span className={styles.span}>M&B Sports</span>
      </h1>
      <p className={styles.par}>As melhores notícias do mundo esportivo</p>
      <button
        type="button"
        onMouseEnter={() => setZoomAtivo(true)}
        onMouseLeave={() => setZoomAtivo(false)}
        className={styles.button}
      >
        VER NOTÍCIAS
      </button>
    </section>
  );
}
