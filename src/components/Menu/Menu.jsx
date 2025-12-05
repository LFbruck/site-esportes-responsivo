import styles from "./Menu.module.css";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { useState } from "react";

export default function Menu() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <MdOutlineSportsSoccer />
        <span>
          <a href="#" className={styles.titulo}>
            M&B Sports
          </a>
        </span>
      </div>

      <div className={styles.divisoria}></div>

      <nav className={styles.nav}>
        <button
          onClick={toggleMenu}
          aria-label="Menu de navegação sanduíche"
          className={`${styles.menuSanduicheIcon} ${
            menuAberto ? styles.aberto : ""
          }`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <ul className={`${styles.menuLista} ${menuAberto ? styles.aberto : ""}`}>
        <li className={styles.linkOne}>
          <a href="#">Início</a>
        </li>
        <li className={styles.linkTwo}>
          <a href="#atletismo">Atletismo</a>
        </li>
        <li className={styles.linkThree}>
          <a href="#volei">Vôlei</a>
        </li>
        <li className={styles.linkFour}>
          <a href="#tenis">Tênis</a>
        </li>
      </ul>
    </header>
  );
}
