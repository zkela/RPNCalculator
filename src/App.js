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
  const [isCalculating, setIsCalculating] = useState(true);

  const handleClick = () => {
    let { err, stack } = calculate(input);
    setResult(stack.pop());
    setIsCalculating(false);
    if (err !== "") setError(err);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    setError("");
    setIsCalculating(true);
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
        {!isCalculating ? (
          <Box
            sx={{
              color: "green",
              fontFamily: "Monospace",
              fontSize: "h3.fontSize",
              m: 1,
            }}
          >
            {`Result = ${result}`}
          </Box>
        ) : null}
      </Typography>
      <br />
      {error !== "" ? (
        <Typography component="div">
          <Box
            sx={{
              color: "red",
              fontFamily: "Monospace",
              fontSize: "h6.fontSize",
              m: 1,
            }}
          >
            {error}
          </Box>
        </Typography>
      ) : null}
    </div>
  );
}

export default App;
