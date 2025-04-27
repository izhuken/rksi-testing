const calc = (x) => {
  const convertedRads = x * (Math.PI / 180);

  return Math.E ** (4 * Math.sin(convertedRads));
};

console.log(calc(8));
