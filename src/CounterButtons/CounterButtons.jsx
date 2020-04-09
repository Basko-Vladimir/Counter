import React from "react";
import Button from "./Button/Button";
import s from "./CounterButtons.module.css"

const CounterButtons = (props) => {
    return (
        <div className={s.buttons}>
            <Button btnName={props.buttons.inc.name}
                    isDisabled={props.displayValue === props.currentMaxCount || isNaN(props.displayValue)}
                    func={props.buttons.inc.incFunc}/>
            <Button btnName={props.buttons.reset.name}
                    isDisabled={props.displayValue === props.currentStartCount || isNaN(props.displayValue)}
                    func={props.buttons.reset.resetFunc}/>
        </div>
    )
};

export default CounterButtons;