import React from "react";
import s from "./Settings.module.css";
import SettingsField from "./SettingsField/SettingsField";

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
                    this.props.changeStartValue(this.props.currentStartCount, true);
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
                <SettingsField title={'max value'}
                               fieldName={'maxValue'}
                               onChangeValue={this.onChangeValue}
                               classField={classMaxCount}
                               currentValue={this.props.currentMaxCount}/>
                <SettingsField title={'start value'}
                               fieldName={'startValue'}
                               onChangeValue={this.onChangeValue}
                               classField={classStartCount}
                               currentValue={this.props.currentStartCount}/>
            </div>
        )
    }
}

export default Settings;