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
                    let currentCount = this.state.count;
                    this.setState({
                        ...this.state,
                        count: ++currentCount
                    })
                }
            },
            reset: {
                name: 'reset',
                resetFunc: () => {
                    this.setState({
                        ...this.state,
                        count: 0
                    })
                }
            },
            set: {name: 'set'}
        },
        countMax: 5,
        countStart:0
    };

    changeMaxValue = () => {
        debugger
        alert('changeMaxValue');
    };

    changeStartValue = () => {
        alert('changeStartValue');
    };



    render() {
        return (
            <div className="App">
                <div className={'wrap'}>
                    <Settings/>
                    <SettingsButtons btnName={this.state.buttons.set.name} changeMaxValue={this.changeMaxValue}/>
                </div>
                <div className={'wrap'}>
                    <Display countStart={this.state.countStart} countMax={this.state.countMax}/>
                    <CounterButtons buttons={this.state.buttons}
                                    incFunc={this.state.buttons.inc.incFunc}
                                    resetFunc={this.state.buttons.reset.resetFunc}
                                    count={this.state.count}
                                    countMax={this.state.countMax} />
                </div>
            </div>
        );
    }
}

export default App;
