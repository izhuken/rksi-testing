const func82 = (matrix) => {
  const elementMap = {};
  let nonZeroRowsCount = 0;

  for (let row of matrix) {
    if (!row.includes(0)) {
      nonZeroRowsCount += 1;
    }
  }

  matrix.flat().forEach((num) => {
    elementMap[num] = (elementMap[num] || 0) + 1;
  });
  const repeatedElements = Object.keys(elementMap)
    .filter((key) => elementMap[key] > 1)
    .map(Number);

  return {
    nonZeroRowsCount,
    repeatedElements:
      repeatedElements.length > 0 ? Math.max(...repeatedElements) : null
  };
};

console.log(
  func82([
    [-1, 6, 9, 9],
    [-7, -8, -1, 10]
  ])
);
