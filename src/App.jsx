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
                    let currentCount = this.state.startCount.setStartCount;
                    this.setState({
                        ...this.state,
                        startCount: {
                            ...this.state.startCount,
                            setStartCount: ++currentCount
                        }
                    })
                }
            },
            reset: {
                name: 'reset',
                resetFunc: () => {
                    this.setState({
                        ...this.state,
                        startCount: {
                            ...this.state.startCount,
                            setStartCount: 0
                        }
                    })
                }
            },
            set: {name: 'set'}
        },
        maxCount: {
            currentMaxCount: null,
            setMaxCount: 5,
            errorMaxCount: false
        },
        startCount:{
            currentStartCount: null,
            setStartCount: 0,
            errorStartCount: false
        },
        displayValue: 0
    };

    changeMaxValue = (e) => {
        let currentValue = e.currentTarget.value;
        this.setState({
            ...this.state,
            maxCount: {
                ...this.state.maxCount,
                currentValue
            }
        });
    };

    changeStartValue = (e) => {
        let currentValue = e.currentTarget.value;
        if (currentValue < this.state.startCount.setStartCount) {
            this.setState({
                ...this.state,
                startCount: {
                    ...this.state.startCount,
                    errorStartCount: true
                },
                displayValue: 'Incorrect Value'
            })
        } else {
            this.setState({
                ...this.state,
                startCount: {
                    setStartCount: 0,
                    errorStartCount: false,
                    currentValue
                }
            });
        }
    };



    render() {
        return (
            <div className="App">
                <div className={'wrap'}>
                    <Settings changeMaxValue={this.changeMaxValue}
                              changeStartValue={this.changeStartValue}
                              errorStartCount={this.state.startCount.errorStartCount}
                              errorMaxCount={this.state.maxCount.errorMaxCount} />
                    <SettingsButtons btnName={this.state.buttons.set.name} />
                </div>
                <div className={'wrap'}>
                    <Display startCount={this.state.startCount.setStartCount}
                             maxCount={this.state.maxCount.setMaxCount}
                             displayValue={this.state.displayValue} />
                    <CounterButtons inc={this.state.buttons.inc}
                                    reset={this.state.buttons.reset}
                                    startCount={this.state.startCount.setStartCount}
                                    maxCount={this.state.maxCount.setMaxCount} />
                </div>
            </div>
        );
    }
}

export default App;
