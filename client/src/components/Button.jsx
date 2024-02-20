import styles from "../css/Buttons.module.css";
export default function Button({ button, big }) {
  return (
    <div className={`${styles.buttonWrapper} ${big && styles.big}`}>
      <div className={styles.button} onClick={button.action}></div>
      <div className={styles.label}>{button.label}</div>
    </div>
  );
}
