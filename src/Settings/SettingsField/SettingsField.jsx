import React from "react";
import s from "../Settings.module.css";

const SettingsField = (props) => {
    return (
        <div className={s.settingsItem}>
            <span>{props.title}:</span>
            <input type="number"
                   name={props.fieldName}
                   onChange={props.onChangeValue}
                   className={props.classField}
                   value={props.currentValue} />
        </div>
    )
};

export default SettingsField;