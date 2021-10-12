import { useState } from "react";
function App() {
  const [result, setResult] = useState(0);
  const [operations, setOperations] = useState("");

  return (
    <div>
      <label>Introduce the operations</label>
      <input type="text" />
      <button>Calculate</button>
      <br />
      <span>{`Result= ${result}`}</span>
    </div>
  );
}

export default App;
