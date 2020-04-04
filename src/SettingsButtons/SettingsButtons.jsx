import React from "react";
import s from "./SettingsButtons.module.css";
import Button from "../CounterButtons/Button/Button";

const SettingsButtons = (props) => {
    return(
        <div className={s.buttons}>
            <Button btnName={props.btnName}/>
        </div>
    )
};

export default SettingsButtons;