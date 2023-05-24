import * as React from "react";
import * as styles from "./button.module.scss";

export default function Button({type="button", className="", label="", ...rest}){
    return (
        <button type={type} className={`${styles.btn} ${styles.btnPrimary} ${className}`} {...rest}>{label}</button>
    )
}