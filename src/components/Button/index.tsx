import styles from "./styles.module.css";

type ButtonProps = {
  text: string;
  onClick: () => void;
  position?: "left" | "right";
};

export const Button = ({ text, onClick, position = "left" }: ButtonProps) => {
  const buttonStyles = position === "left" ? styles.left : styles.right;
  return (
    <button className={buttonStyles} onClick={onClick}>
      <span>{text} </span>
    </button>
  );
};
