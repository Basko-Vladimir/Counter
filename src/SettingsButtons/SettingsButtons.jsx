import React from "react";
import s from "./SettingsButtons.module.css";
import Button from "../CounterButtons/Button/Button";

const SettingsButtons = (props) => {
    return(
        <div className={s.buttons}>
            <Button btnName={props.setBtn.name}
                    func={props.setBtn.setValues}
                    isDisabled={props.displayValue === 'Incorrect value'}
            />
        </div>
    )
};

export default SettingsButtons;