common.css
input {
 padding: 5px;
 margin: 20px;
}
input[type=button] {
 padding: 10px;
 margin: 20px;
}
custom_text_input.js
import React from 'react';
import './common.css';

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        // Create a ref to store the textInput DOM element
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.textInput.current.focus();
    }

    render() {
        // Tell React that we want to associate the <input> ref
        // with the `textInput` created in the constructor
        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput}
                />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}
export default CustomTextInput;
App.js
import React from 'react';
import CustomTextInput from './refs/custom_text_input.js';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <CustomTextInput />
            </header>
        </div>
    );
}
export default App;