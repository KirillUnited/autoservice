import * as React from "react";
import * as styles from "./button.module.scss";

const Button = React.forwardRef(({ type = "button", className = "", label = "", ...rest }, ref) => {
    return (
        <button type={type} className={`${styles.btn} ${styles.btnPrimary} ${className}`} {...rest} ref={ref}>{label}</button>
    )
});

export default Button;