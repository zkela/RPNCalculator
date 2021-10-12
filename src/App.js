import { useState } from "react";
import calculate from "./calculator/calculator";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [error, setError] = useState("");

  const handleClick = () => {
    let { err, stack } = calculate(input);
    setResult(stack.pop());
    if (err !== "") setError(err);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    setError("");
  };

  return (
    <div>
      <label>Introduce the operations</label>
      <input type="text" value={input} onChange={(e) => handleInput(e)} />
      <button onClick={handleClick}>Calculate</button>
      <br />
      <span>{`Result= ${result}`}</span>
      <br />
      {error !== "" ? <span>{error}</span> : null}
    </div>
  );
}

export default App;
