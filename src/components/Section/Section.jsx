import styles from "./Section.module.css";

export default function Section({ img, alt, text, id }) {
  return (
    <section id={id} className={styles.section}>
      <img src={img} alt={alt} className={styles.imagem} />
      <p>{text}</p>
    </section>
  );
}
