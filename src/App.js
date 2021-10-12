import { useState } from "react";
import calculate from "./calculator/calculator";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
      <Stack spacing={2} direction="row">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              label="Introduce Operations"
              id="outlined-size-small"
              defaultValue="Small"
              size="small"
              value={input}
              onChange={(e) => handleInput(e)}
            />
          </div>
        </Box>
        <Button variant="contained" onClick={handleClick}>
          Calculate
        </Button>
      </Stack>
      <br />
      <Typography component="div">
        <Box
          sx={{
            color: "green",
            fontFamily: "Monospace",
            fontSize: "h3.fontSize",
            m: 1,
          }}
        >
          {`Result= ${result}`}
        </Box>
      </Typography>
      <br />
      {error !== "" ? <span>{error}</span> : null}
    </div>
  );
}

export default App;
