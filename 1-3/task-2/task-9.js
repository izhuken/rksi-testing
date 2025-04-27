const calc = (x) => {
  const convertedRads = x * (Math.PI / 180);
  return Math.tan(convertedRads);
};

console.log(calc(6));
