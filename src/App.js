import { useState } from "react";
function App() {
  const [result, setResult] = useState(0);
  const [operations, setOperations] = useState("");

  return (
    <div>
      <label>Introduce the operations</label>
      <input
        type="text"
        value={operations}
        onChange={(e) => setOperations(e.target.value)}
      />
      <button>Calculate</button>
      <br />
      <span>{`Result= ${result}`}</span>
      <br />
      <span>{operations}</span>
    </div>
  );
}

export default App;
