import React from "react";
import styles from "./Input.module.css";

function Input({ label, type, name }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} className={styles.input} />
    </div>
  );
}

export default Input;
