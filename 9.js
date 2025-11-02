import React, { useRef } from "react";

export default function App() {
  // Create a ref
  const inputRef = useRef(null);

  // Function to focus the input
  const handleFocus = () => {
    inputRef.current.focus(); // Access the input element directly
  };

  return (
    <div>
      <h1>Custom Text Input with Ref</h1>
      <input type="text" ref={inputRef} placeholder="Type something..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
