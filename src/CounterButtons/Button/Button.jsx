import React from "react";
import s from "./Button.module.css";

const Button = (props) => {
    return (
        <button className={s.button}
                disabled={props.isDisabled}
                onClick={props.func}>{props.btnName}</button>
    )
};

export default Button;