import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
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
          value1 = stack.pop();
          value2 = stack.pop();
          tempResult = value2 + value1;
          stack.push(tempResult);
          break;
        case "-":
          value1 = stack.pop();
          value2 = stack.pop();
          tempResult = value2 - value1;
          stack.push(tempResult);
          break;
        case "*":
          value1 = stack.pop();
          value2 = stack.pop();
          tempResult = value2 * value1;
          stack.push(tempResult);
          break;
        case "/":
          value1 = stack.pop();
          value2 = stack.pop();
          tempResult = value2 / value1;
          stack.push(tempResult);
          break;
        default:
          stack.push(parseInt(value));
      }
    }
    setResult(stack.pop());
  };

  return (
    <div>
      <label>Introduce the operations</label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Calculate</button>
      <br />
      <span>{`Result= ${result}`}</span>
      <br />
      <span>{input}</span>
    </div>
  );
}

export default App;
