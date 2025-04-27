// Вариант 1

/**
 * Description placeholder
 *
 * @param {unknown[]} array
 * @param {unknown} element
 */
const func1 = (array, element) => {
  const itemCounter = 0;

  for (let item of array) {
    if (item === element) {
      itemCounter++;
    }
  }

  console.log(`Количество совпадений в массиве: ${itemCounter}`);
};

/** Description placeholder */
const func19 = () => {};

/**
 * @param {number[]} arr - массив целых чисел
 */
const func37 = () => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i]) === Math.abs(arr[i + 1])) {
      return true;
    }
  }
  return false;
};

/** Description placeholder
 * @param {number[]} array
 */
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
    if (num > arr[maxIndex]) maxIndex = index;
    if (num < arr[minIndex]) minIndex = index;
  });

  for (let i = start + 1; i < end; i++) {
    multiplyResult *= array[i];
  }
  return {
    sumOfNegative,
    multiplyResult,
    sortedArray
  };
};

/** Description placeholder
 * @param {number[][]} matrix
 */
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
      elementMap.length > 0 ? Math.max(...repeatedElements) : null
  };
};

/**
 * @param {number[]} arr - массив вещественных чисел
 */

const func100 = () => {
  if (arr.length === 0) {
    return null; // Для пустого массива
  }

  let min = arr[0];
  let max = arr[0];
  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }

  const sum = min + max;

  return {
    sum,
    min,
    max,
    minIndex,
    maxIndex
  };
};

/**
 * @param {number[][]} matrix
 */
const func120 = (matrix) => {
  const sumStash = [];

  for (const row of matrix) {
    const rowSum = row.reduce((a, b) => a + b, 0);
    sumStash.push(rowSum);
  }

  sumStash.forEach((elem, i) => {
    console.log(`Сумма чисел строки ${i + 1} = ${elem}`);
  });

  console.log(`Максималная сумма = ${Math.max(...sumStash)}`);
};
