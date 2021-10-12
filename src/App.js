import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [error, setError] = useState("");

  const handleClick = () => {
    let operations = input.split(" ");
    let stack = [];
    let value1 = 0;
    let value2 = 0;
    let tempResult = 0;
    for (let i = 0; i < operations.length; i++) {
      let value = operations[i];
      switch (value) {
        case "+":
        case "-":
        case "*":
        case "/":
          value1 = stack.pop();
          value2 = stack.pop();
          tempResult = eval(value2 + value + value1);
          stack.push(tempResult);
          break;
        default:
          let valueInt = parseInt(value);
          if (isNaN(valueInt)) {
            setError(
              `I'm sorry ${value} is not a number, the character will be omitted`
            );
          } else {
            stack.push(parseInt(value));
          }
      }
    }
    setResult(stack.pop());
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
