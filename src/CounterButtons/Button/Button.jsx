import React from "react";
import s from "./Button.module.css";

const Button = (props) => {
    return (
        <input className={s.button}
               type="button"
               value={props.btnName}
               disabled={props.isDisabled}
               onClick={props.func}/>
    )
};

export default Button;