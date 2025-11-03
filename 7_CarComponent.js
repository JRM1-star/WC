Car_component.js
import React from 'react';
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: "red" };
    }

    render() {
        /*
        While returning JSX, it is important to enclose everything in a single tag.
        So, in this example, we are enclosing inside the <div> tag.
        But we can also enclose in blank <> </> tags.
        */
        return (
            <div>
                <h2>Car</h2>
                <p>I am a {this.props.model}!</p>
                <p>My color is {this.state.color}</p>
            </div>
        );
    }
}

export default Car;
App.js
import React from 'react';
import Car from './components/Car_component.js';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Car model="Mustang" />
            </header>
        </div>
    );
}

export default App;