import React from "react";
import Button from "./Button/Button";
import s from "./CounterButtons.module.css"

const CounterButtons = (props) => {
    return (
        <div className={s.buttons}>
            <Button btnName={props.inc.name}
                    isDisabled={props.displayValue === props.setMaxCount || isNaN(props.displayValue)}
                    func={props.inc.incFunc}/>
            <Button btnName={props.reset.name}
                    isDisabled={props.displayValue === props.setStartCount || isNaN(props.displayValue)}
                    func={props.reset.resetFunc}/>
        </div>
    )
};

export default CounterButtons;