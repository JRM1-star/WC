import React from "react";

class LifeCycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor: Component is created");
  }

  componentDidMount() {
    console.log("componentDidMount: Component is mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      `componentDidUpdate: Component updated from ${prevState.count} to ${this.state.count}`
    );
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Component will be removed");
  }

  render() {
    console.log("Render: Component is rendering");
    return (
      <div>
        <h1>React Component Lifecycle Demo</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default function App() {
  return <LifeCycleDemo />;
}
