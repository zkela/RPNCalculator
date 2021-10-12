import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const handleClick = () => {
    let operations = input.split(" ");
    let stack = [];
    for (let i = 0; i < operations.length; i++) {
      let value = operations[i];
      switch (value) {
        case "+":
          let valor1 = stack.pop();
          let valor2 = stack.pop();
          let resultado = valor2 + valor1;
          stack.push(resultado);
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
