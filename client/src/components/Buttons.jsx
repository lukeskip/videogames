import styles from "../css/Buttons.module.css";
import Button from "../components/Button";

export default function Buttons({ buttons, big }) {
  return (
    <>
      {buttons !== undefined && buttons.length > 0 && (
        <div className={styles.buttonsGroup}>
          {buttons.map((button, index) => (
            <Button big={big} button={button} key={index} />
          ))}
        </div>
      )}
    </>
  );
}
