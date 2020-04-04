import React from "react";
import s from "./Display.module.css";

const Display = (props) => {
    return (
        <div className={s.display}>
            <span className={(props.maxCount === props.startCount) || isNaN(props.displayValue)
                ? s.maxNumber : s.number}>{props.displayValue}</span>
        </div>
    )
};

export default Display;