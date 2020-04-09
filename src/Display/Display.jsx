import React from "react";
import s from "./Display.module.css";

const Display = (props) => {

    let changeClass = () => {
        switch (props.displayValue) {
            case props.currentMaxCount:
                return s.maxNumber;
            case 'Incorrect value':
                return s.errorText;
            case 'Enter values and press "set"':
                return '';
            default:
                return s.number
        }

    };
    console.log(changeClass());
    return (
        <div className={s.display}>
            <span className={changeClass()}>{props.displayValue}</span>
        </div>
    )
};

export default Display;