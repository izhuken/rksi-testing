const func100 = (array) => {
  if (array.length === 0) {
    return null; // Для пустого массива
  }

  let min = array[0];
  let max = array[0];
  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
    if (array[i] > max) {
      max = array[i];
      maxIndex = i;
    }
  }

  const sum = min + max;

  return {
    sum,
    min,
    minIndex,
    max,
    maxIndex
  };
};

console.log(func100([-1, -2, 4, 6, 7, -7]));
