import React from "react";
import s from "./Display.module.css";

const Display = (props) => {

    let changeClass = () => {
        switch (props.displayValue) {
            case props.setMaxCount:
                return s.maxNumber;
            case 'Incorrect value':
                return s.errorText;
            case 'Enter values and press "set"':
                return s.text;
            default:
                return s.number
        }

    };

    return (
        <div className={s.display}>
            <span className={changeClass()}>{props.displayValue}</span>
        </div>
    )
};

export default Display;