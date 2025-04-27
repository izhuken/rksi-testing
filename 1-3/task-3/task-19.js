const readline = require("readline-sync");

const func19 = () => {
  const B = [];
  const matrix = [];

  let rows = Number(readline.question("Введите количество строк: "));
  let columns = Number(readline.question("Введите количество столбцов: "));

  for (let i = 0; i < rows; i++) {
    const row = [];

    for (let j = 0; j < columns; j++) {
      row.push(Number(readline.question("Введите новое число: ")));
    }

    matrix.push(row);
  }

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    B.push(row.filter((e) => e >= 0).length);
  }

  return B;
};

console.log(func19());
