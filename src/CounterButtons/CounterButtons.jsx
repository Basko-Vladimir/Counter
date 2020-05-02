import React from "react";
import Button from "./Button/Button";
import s from "./CounterButtons.module.css"

const CounterButtons = (props) => {
    return (
        <div className={s.buttons}>
            <Button btnName={'inc'}
                    isDisabled={props.displayValue === props.currentMaxCount || isNaN(props.displayValue)}
                    func={props.inc}/>
            <Button btnName={'reset'}
                    isDisabled={props.displayValue === props.currentStartCount || isNaN(props.displayValue)}
                    func={props.reset}/>
        </div>
    )
};

export default CounterButtons;