const readline = require("readline-sync");

const func1 = (array) => {
  let itemCounter = 0;
  let element = Number(readline.question("Введите число: "));

  for (let item of array) {
    if (item === element) {
      itemCounter++;
    }
  }

  return itemCounter;
};

console.log(func1([1, -2, 3, -4, -5, 6]));
