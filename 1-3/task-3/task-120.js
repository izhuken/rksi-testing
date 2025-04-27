const readline = require("readline-sync");

const func120 = () => {
  const matp = [];
  const sumStash = [];

  let t = Number(readline.question("Введите количество строк (T): "));
  let m = Number(readline.question("Введите количество столбцов (M): "));

  for (let i = 0; i < rows; i++) {
    const row = [];

    for (let j = 0; j < columns; j++) {
      row.push(Number(readline.question("Введите новое число: ")));
    }

    matrix.push(row);
  }

  for (const row of matp) {
    const rowSum = row.reduce((a, b) => a + b, 0);
    sumStash.push(rowSum);
  }

  return {
    sumStash,
    maxSum: sumStash.indexOf(Math.max(...sumStash))
  };
};

console.log(
  func120([
    [1, 2, 3],
    [4, 5, 6]
  ])
);
