let number1: number = 10;
let number2: number = 2;

function add(n1: number, n2: number): number {
  return n1 + n2;
}

function substract(n1: number, n2: number): number {
  return n1 - n2;
}

function multiply(n1: number, n2: number): number {
  return n1 * n2;
}

function divide(n1: number, n2: number): number {
  return n1 / n2;
}

console.log(`add result: ${add(number1, number2)}`);
console.log(`subtract result: ${substract(number1, number2)}`);
console.log(`multiply result: ${multiply(number1, number2)}`);
console.log(`divide result: ${divide(number1, number2)}`);
