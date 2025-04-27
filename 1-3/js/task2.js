const calc = (x = undefined) => {
  /* tan(x) */

  if (x == undefined) {
    console.error("Аргумент не передан");
    return;
  }

  if (isNaN(x) || typeof x !== "number") {
    console.error("Аргумент не является числом");
    return;
  }

  const result = Math.log10(x);

  console.log(result);
};

calc();
