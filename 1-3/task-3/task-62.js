const func62 = (array) => {
  const sortedArray = array.slice().sort((a, b) => a - b);
  const sumOfNegative = array.reduce(
    (sum, num) => (num < 0 ? sum + num : sum),
    0
  );

  let multiplyResult = 1;
  let maxIndex = 0;
  let minIndex = 0;

  array.forEach((num, index) => {
    if (num > array[maxIndex]) maxIndex = index;
    if (num < array[minIndex]) minIndex = index;
  });

  for (let i = maxIndex; i < minIndex; i++) {
    multiplyResult *= array[i];
  }

  return {
    sumOfNegative,
    multiplyResult,
    sortedArray
  };
};

const result = func62([-1, -2, 4, 6, 7, -7]);
console.log(result);
