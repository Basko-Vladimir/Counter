import React from "react";
import s from "./Display.module.css";

const Display = (props) => {
    return (
        <div className={s.display}>
            <span className={props.countMax === props.count ? s.maxNumber : s.number}>{props.count}</span>
        </div>
    )
};

export default Display;