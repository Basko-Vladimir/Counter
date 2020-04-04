import React from "react";
import s from "./Settings.module.css";

const Settings = (props) => {
    return(
        <div className={s.settings}>
            <div className={s.settingsItem}>
                <span>max value:</span>
                <input type="number"
                       onChange={props.changeMaxValue}
                       className={props.errorMaxCount ? s.error : ''}/>
            </div>
            <div className={s.settingsItem}>
                <span>start value:</span>
                <input type="number"
                       onChange={props.changeStartValue}
                       className={props.errorStartCount ? s.error : ''} />
            </div>
        </div>
    )
};

export default Settings;