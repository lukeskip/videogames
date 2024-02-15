import styles from "../css/Buttons.module.css";
import Button from "../components/Button";

export default function Buttons({ buttons }) {
  return (
    <>
      {buttons !== undefined && buttons.length > 0 && (
        <div className={styles.buttonsGroup}>
          {buttons.map((button, index) => (
            <Button button={button} key={index} />
          ))}
        </div>
      )}
    </>
  );
}
