import React from "react";
import s from "./Settings.module.css";

const Settings = (props) => {
    return(
        <div className={s.settings}>
            <div className={s.settingsItem}>
                <span>max value:</span>
                <input type="number" />
            </div>
            <div className={s.settingsItem}>
                <span>start value:</span>
                <input type="number" />
            </div>
        </div>
    )
};

export default Settings;