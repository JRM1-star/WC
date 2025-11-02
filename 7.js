import React, { useState } from "react";

// Functional component
function Greeting(props) {
  // State: count
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello, {props.name}!</h1> {/* Using props */}
      <p>You clicked {count} times.</p> {/* Using state */}
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

// Usage
export default function App() {
  return <Greeting name="Alice" />; // Pass a prop
}
