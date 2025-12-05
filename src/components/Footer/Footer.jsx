import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.titulo}>Desenvolvedores</h2>

      <div className={styles.containerMembros}>
        <div className={styles.membro}>
          <img
            src="https://avatars.githubusercontent.com/u/133892887?v=4"
            alt="Avatar Luiz"
            className={styles.avatar}
          />
          <div>
            <p className={styles.nome}>Luiz Filipe Bruck Reis Mattos</p>
            <a
              href="https://www.linkedin.com/in/luiz-filipe-bruck-reis-mattos-651497268/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedin}
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className={styles.membro}>
          <img
            src="https://avatars.githubusercontent.com/u/167227958?v=4"
            alt="Avatar Gustavo"
            className={styles.avatar}
          />

          <div>
            <p className={styles.nome}>Gustavo Mendes de Oliveira</p>
            <a
              href="https://www.linkedin.com/in/gustavomdeoliveira/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedin}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
