const calcLog = (x) => {
  if (x == undefined) {
    console.error("Аргумент не передан");
    return;
  }

  if (isNaN(x) || typeof x !== "number") {
    console.error("Аргумент не является числом");
    return;
  }

  return Math.log10(x);
};

const calcTan = (x) => {
  if (x == undefined) {
    console.error("Аргумент не передан");
    return;
  }

  if (isNaN(x) || typeof x !== "number") {
    console.error("Аргумент не является числом");
    return;
  }

  const convertedRads = x * (Math.PI / 180);

  if (Math.cos(convertedRads) == 0) {
    console.error("Невозможно вычислить значение!");
    return;
  }

  return Math.tan(convertedRads);
};
