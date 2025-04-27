const func37 = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (Math.abs(array[i]) === Math.abs(array[i + 1])) {
      return true;
    }
  }
  return false;
};

console.log(func37([1, -2, 3, 4, -5, 6, -6]));
