import React from 'react';
import './App.css';
import Display from "./Display/Display";
import CounterButtons from "./CounterButtons/CounterButtons";
import Settings from "./Settings/Settings";
import SettingsButtons from "./SettingsButtons/SettingsButtons";
import {connect} from "react-redux";
import {changeMaxValue, changeStartValue, inc, reset, setSavedValues, setValues} from "./redux/counter-reducer";


class App extends React.Component {
    componentDidMount() {
        this.props.setSavedValues();
    }

    render() {
        return (
            <div className="App">
                <div className='wrapApp'>
                    <div className={'wrap'}>
                        <Settings currentMaxCount={this.props.currentMaxCount}
                                  currentStartCount={this.props.currentStartCount}
                                  changeMaxValue={this.props.changeMaxValue}
                                  changeStartValue={this.props.changeStartValue} />
                        <SettingsButtons displayValue={this.props.displayValue}
                                         set={this.props.setValues} />
                    </div>
                    <div className={'wrap'}>
                        <Display displayValue={this.props.displayValue}
                                 currentMaxCount={this.props.currentMaxCount} />
                        <CounterButtons displayValue={this.props.displayValue}
                                        currentMaxCount={this.props.currentMaxCount}
                                        currentStartCount={this.props.currentStartCount}
                                        inc={this.props.inc}
                                        reset={this.props.reset}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        displayValue: state.displayValue,
        currentMaxCount: state.currentMaxCount,
        currentStartCount: state.currentStartCount
    }
};

export default connect(mapStateToProps,
    {reset, inc, setValues, changeStartValue, changeMaxValue, setSavedValues})(App);
