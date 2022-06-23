const readline = require('readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const ADDITION = 0;
const SUBTRACTION = 1;
const MULTIPLY = 2;
const DIVIDE = 3;
async function getOperation() {
  let isSelectingOp = true;

  while (isSelectingOp) {

    let Operations = await rl.question("What operation? \n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n");
    if (Operations === "1") {
      isSelectingOp = false;
      return ADDITION;
    }
    else if (Operations === "2") {
      isSelectingOp = false;
      return SUBTRACTION;
    }
    else if (Operations === "3") {
      isSelectingOp = false;
      return MULTIPLY;
    }
    else if (Operations === "4") {
      isSelectingOp = false;
      return DIVIDE;
    }
    else {
      console.log("Invalid Input");
    }
  }
}

async function getOperand() {
  let isSelectingOperand = true;
  
  while (isSelectingOperand) {
    let Operand = parseFloat(await rl.question("Input Operand: "));
    if (!(isNaN(Operand))) {
    isSelectingOperand = false;
    return Operand;    
    }
    else {
    console.log("Invalid Input");
    }

  }
}

function compute (selectedOperation, firstOperand, secondOperand) {
  if (selectedOperation === ADDITION) {
    return firstOperand + secondOperand;
  }
  else if (selectedOperation === SUBTRACTION) {
    return firstOperand - secondOperand;
  }
  else if (selectedOperation === MULTIPLY) {
    return firstOperand * secondOperand;      
  }
  else if (selectedOperation === DIVIDE) {
    return firstOperand / secondOperand;
  }
}

(async () => {

  const selectedOperation = await getOperation();
  const firstOperand = await getOperand();
  const secondOperand = await getOperand();
  const result = compute(selectedOperation, firstOperand, secondOperand);
  console.log(result);

    rl.close();
})();
