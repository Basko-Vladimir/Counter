import React from 'react';
import './App.css';
import Display from "./Display/Display";
import CounterButtons from "./CounterButtons/CounterButtons";
import Settings from "./Settings/Settings";
import SettingsButtons from "./SettingsButtons/SettingsButtons";

class App extends React.Component {
    componentDidMount() {
        let setValues = JSON.parse(localStorage.getItem('setValues'));
        if (setValues) {
            this.setState({
                ...this.state,
                currentMaxCount: setValues.setMaxCount,
                currentStartCount: setValues.setStartCount,
                displayValue: setValues.setStartCount
            })
        }
    }

    state = {
        buttons: {
            inc: {
                name: 'inc',
                incFunc:  () => {
                    let currentDisplayValue = this.state.displayValue;
                    this.setState({
                        ...this.state,
                        displayValue: ++currentDisplayValue
                    })
                }},
            reset: {
                name: 'reset',
            resetFunc: () => {
                this.setState({
                    ...this.state,
                    displayValue: this.state.currentStartCount
                })
            }},
            set: {
                name: 'set',
                setValues: () => {
                    let setValues = JSON.stringify({
                        setStartCount: this.state.currentStartCount,
                        setMaxCount: this.state.currentMaxCount
                    });
                    localStorage.setItem('setValues', setValues);
                    this.setState({
                        ...this.state,
                        displayValue: this.state.currentStartCount
                    })
                }
            }
        },
        currentMaxCount: 5,
        currentStartCount: 0,
        displayValue: 0
    };

    changeStartValue = (newValue, error) => {
        if (error) {
            this.setState({
                ...this.state,
                currentStartCount: +newValue,
                displayValue: 'Incorrect value'
            });
        } else {
            this.setState({
                ...this.state,
                currentStartCount: +newValue,
                displayValue: 'Enter values and press "set"'
            });
        }
    };

    changeMaxValue = (newValue) => {
        if (newValue <= this.state.currentStartCount) {
            this.setState({
                ...this.state,
                currentMaxCount: +newValue,
                displayValue: 'Incorrect value'
            });
        } else {
            this.setState({
                ...this.state,
                currentMaxCount: +newValue,
                displayValue: 'Enter values and press "set"'
            });
        }
    };

    render() {
        return (
            <div className="App">
                <div className={'wrap'}>
                    <Settings currentMaxCount={this.state.currentMaxCount}
                              currentStartCount={this.state.currentStartCount}
                              changeMaxValue={this.changeMaxValue}
                              changeStartValue={this.changeStartValue} />
                    <SettingsButtons setBtn={this.state.buttons.set}
                                     displayValue={this.state.displayValue} />
                </div>
                <div className={'wrap'}>
                    <Display displayValue={this.state.displayValue}
                             currentMaxCount={this.state.currentMaxCount} />
                    <CounterButtons displayValue={this.state.displayValue}
                                    currentMaxCount={this.state.currentMaxCount}
                                    currentStartCount={this.state.currentStartCount}
                                    buttons={this.state.buttons} />
                </div>
            </div>
        );
    }
}

export default App;
