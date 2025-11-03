Clock_component.js
import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentWillMount() {
        console.log("Component will mount");
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
        console.log("Component did mount");
    }

    componentWillUpdate() {
        console.log("Component will update");
    }

    componentDidUpdate() {
        console.log("Component did update");
        console.log(); // blank line
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log("Component will unmount");
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
export default Clock;
App.js
import React from 'react';
import Clock from './components/Clock_component.js';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Clock />
            </header>
        </div>
    );
}
export default App;