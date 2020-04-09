import React from "react";
import s from "./Settings.module.css";

class Settings extends React.Component {

    state = {
        errorMaxCount: false,
        errorStartCount: false
    };
    onChangeValue = (e) => {
        let newValue = +e.currentTarget.value;
        switch (e.currentTarget.name) {
            case 'maxValue':
                if (newValue === this.props.currentStartCount) {
                    this.setState({
                        errorStartCount: true,
                        errorMaxCount: true
                    });
                    this.props.changeMaxValue(newValue, true);
                } else if (newValue < this.props.currentStartCount){
                    this.setState({
                        errorStartCount: true,
                        errorMaxCount: true
                    });
                } else {
                    this.setState({
                        errorStartCount: false,
                        errorMaxCount: false});
                    this.props.changeMaxValue(newValue, false);
                }
                break;
            case 'startValue':
                if (newValue < 0 || newValue > this.props.currentMaxCount){
                    this.setState({errorStartCount: true});
                    this.props.changeStartValue(null, true);
                } else if (newValue === this.props.currentMaxCount){
                    this.setState({errorStartCount: true, errorMaxCount: true});
                    this.props.changeStartValue(newValue, true);
                } else {
                    this.setState({errorStartCount: false, errorMaxCount: false});
                    this.props.changeStartValue(newValue, false);
                }
                break;
            default: alert ('Что-то пошло не так!')
        }
    };

    render() {
        let classMaxCount = this.state.errorMaxCount ? s.error : s.default;
        let classStartCount = this.state.errorStartCount ? s.error : s.default;

        return(
            <div className={s.settings}>
                <div className={s.settingsItem}>
                    <span>max value:</span>
                    <input type="number"
                           name={'maxValue'}
                           onChange={this.onChangeValue}
                           className={classMaxCount}
                           value={this.props.currentMaxCount} />
                </div>
                <div className={s.settingsItem}>
                    <span>start value:</span>
                    <input type="number"
                           name={'startValue'}
                           onChange={this.onChangeValue}
                           className={classStartCount}
                           value={this.props.currentStartCount} />
                </div>
            </div>
        )
    }
}

export default Settings;