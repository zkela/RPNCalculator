const calculate = (input) => {
  let operations = input.split(" ");
  let stack = [];
  let value1 = 0;
  let value2 = 0;
  let tempResult = 0;
  let err = "";
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
          err = `I'm sorry ${value} is not a number, the character will be omitted`;
        } else {
          stack.push(parseInt(value));
        }
    }
  }
  return { err, stack };
};

export default calculate;
