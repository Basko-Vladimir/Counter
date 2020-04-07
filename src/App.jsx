import React from 'react';
import './App.css';
import Display from "./Display/Display";
import CounterButtons from "./CounterButtons/CounterButtons";
import Settings from "./Settings/Settings";
import SettingsButtons from "./SettingsButtons/SettingsButtons";

class App extends React.Component {

    state = {
        buttons: {
            inc: {
                name: 'inc',
                incFunc: () => {
                    let currentDisplayValue = this.state.displayValue;
                    this.setState({
                        ...this.state,
                        displayValue: ++currentDisplayValue
                    })
                }
            },
            reset: {
                name: 'reset',
                resetFunc: () => {
                    this.setState({
                        ...this.state,
                        displayValue: 0
                    })
                }
            },
            set: {name: 'set'}
        },
        maxCount: {
            currentMaxCount: 1,
            setMaxCount: 1,
            errorMaxCount: false
        },
        startCount:{
            currentStartCount: 0,
            setStartCount: 0,
            errorStartCount: false
        },
        displayValue: 0
    };

    changeValue = (e) => {
        let currentElem = e.currentTarget;
        switch (currentElem.name) {
            case 'startValue':
                this.setState({
                    ...this.state,
                    startCount: {
                        ...this.state.startCount,
                        currentStartCount: +currentElem.value
                    },
                    displayValue: 'Enter values and press "set"'
                });
                if (currentElem.value < 0) {
                    this.setState({
                        ...this.state,
                        startCount: {
                            ...this.state.startCount,
                            errorStartCount: true
                        },
                        displayValue: 'Incorrect value'
                    });
                }
                break;
            case 'maxValue':
                this.setState({
                    ...this.state,
                    maxCount:{
                        ...this.maxCount,
                        currentMaxCount: +currentElem.value
                    },
                    displayValue: 'Enter values and press "set"'
                });
                if (currentElem.value <= this.state.startCount.setStartCount)
                    this.setState({
                        ...this.state,
                        maxCount: {
                            ...this.state.maxCount,
                            errorMaxCount: true
                        },
                        displayValue: 'Incorrect value'
                    });
                break;
            default: return
        }
    };

    render() {
        return (
            <div className="App">
                <div className={'wrap'}>
                    <Settings currentStartCount={this.state.startCount.currentStartCount}
                              currentMaxCount={this.state.maxCount.currentMaxCount}
                              changeValue={this.changeValue}
                              errorStartCount={this.state.startCount.errorStartCount}
                              errorMaxCount={this.state.maxCount.errorMaxCount} />
                    <SettingsButtons btnName={this.state.buttons.set.name} />
                </div>
                <div className={'wrap'}>
                    <Display setStartCount={this.state.startCount.setStartCount}
                             setMaxCount={this.state.maxCount.setMaxCount}
                             displayValue={this.state.displayValue}
                             errorStartCount={this.state.startCount.errorStartCount}
                             errorMaxCount={this.state.startCount.errorMaxCount} />
                    <CounterButtons inc={this.state.buttons.inc}
                                    reset={this.state.buttons.reset}
                                    displayValue={this.state.displayValue}
                                    setMaxCount={this.state.maxCount.setMaxCount}
                                    setStartCount={this.state.startCount.setStartCount} />
                </div>
            </div>
        );
    }
}

export default App;
