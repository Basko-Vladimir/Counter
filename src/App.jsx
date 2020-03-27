import React from 'react';
import './App.css';
import Display from "./Display/Display";
import Buttons from "./Buttons/Buttons";

class App extends React.Component {

    state = {
        buttons: {
            inc: {name: 'inc'},
            reset: {name: 'reset'}
        },
        count: 0,
        countMax: 5
    };

    incFunc = () => {
        let currentCount = this.state.count;
        this.setState({
            ...this.state,
            count: ++currentCount
        })
    };

    resetFunc = () => {
        this.setState({
            ...this.state,
            count: 0
        })
    };

    render() {
        return (
            <div className="App">
                <div className={'counter'}>
                    <Display count={this.state.count} countMax={this.state.countMax}/>
                    <Buttons buttons={this.state.buttons}
                             incFunc={this.incFunc}
                             resetFunc={this.resetFunc}
                             count={this.state.count}
                             countMax={this.state.countMax} />
                </div>
            </div>
        );
    }
}

export default App;
