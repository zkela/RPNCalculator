import { useState } from "react";
function App() {
  const [result, setResult] = useState(0);
  const [operations, setOperations] = useState("5 5 5 8 + + -");
  const [stack, setStack] = useState([]);

  const handleClick = () => {
    let array = operations.split(" ");

    for (let i = 0; i < array.length; i++) {
      let value = array[i];
      switch (value) {
        case "+":
          const newStack = [];
          newStack.push(...array);
          console.log(newStack);
          let value1 = newStack.pop();
          console.log(value1);
          let value2 = newStack.pop();
          console.log(value2);

          setStack([...newStack]);

          setResult(value1 + value2);
          setStack([...stack, result]);
          // stack.push(result);
          break;
        case "-":
        case "*":
        case "/":
        default:
          setStack([...stack, parseInt(value)]);
        // stack.push(parseInt(value));
      }
    }
    setResult(stack.pop());
  };

  return (
    <div>
      <label>Introduce the operations</label>
      <input
        type="text"
        value={operations}
        onChange={(e) => setOperations(e.target.value)}
      />
      <button onClick={handleClick}>Calculate</button>
      <br />
      <span>{`Result= ${result}`}</span>
      <br />
      <span>{operations}</span>
    </div>
  );
}

export default App;
