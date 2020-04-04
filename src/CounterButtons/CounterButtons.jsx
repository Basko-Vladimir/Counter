import React from "react";
import Button from "./Button/Button";
import s from "./CounterButtons.module.css"

const CounterButtons = (props) => {
    return (
        <div className={s.buttons}>
            <Button btnName={props.inc.name}
                    isDisabled={props.startCount === props.maxCount}
                    func={props.inc.incFunc}/>
            <Button btnName={props.reset.name}
                    isDisabled={!props.startCount}
                    func={props.reset.resetFunc}/>
        </div>
    )
};

export default CounterButtons;