import React from "react";
import Button from "./Button/Button";
import s from "./Buttons.module.css"

const Buttons = (props) => {
    return (
        <div className={s.buttons}>
            <Button btnName={props.buttons.inc.name} isDisabled={props.count === props.countMax} func={props.incFunc}/>
            <Button btnName={props.buttons.reset.name} isDisabled={!props.count} func={props.resetFunc}/>
        </div>
    )
};

export default Buttons;