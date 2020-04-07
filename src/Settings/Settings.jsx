import React from "react";
import s from "./Settings.module.css";

const Settings = (props) => {
    return(
        <div className={s.settings}>
            <div className={s.settingsItem}>
                <span>max value:</span>
                <input type="number"
                       name={'maxValue'}
                       onChange={props.changeValue}
                       className={props.errorMaxCount ? s.error : s.default}
                       value={props.currentMaxCount} />
            </div>
            <div className={s.settingsItem}>
                <span>start value:</span>
                <input type="number"
                       name={'startValue'}
                       onChange={props.changeValue}
                       className={props.errorStartCount ? s.error : s.default}
                       value={props.currentStartCount} />
            </div>
        </div>
    )
};

export default Settings;