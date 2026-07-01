function multiply(a, b) {
  let result = 0;
  let isNegative = (a < 0) !== (b < 0);
  let absA = a < 0 ? -a : a;
  let absB = b < 0 ? -b : b;

  for (let i = 0; i < absB; i++) {
    result += absA;
  }
  return isNegative ? -result : result;
}

function divide(a, b) {
  if (b === 0) return NaN;
  let result = 0;
  let isNegative = (a < 0) !== (b < 0);
  let absA = a < 0 ? -a : a;
  let absB = b < 0 ? -b : b;

  while (absA >= absB) {
    absA -= absB;
    result++;
  }
  return isNegative ? -result : result;
}

function modulo(a, b) {
  if (b === 0) return NaN;
  let absA = a < 0 ? -a : a;
  let absB = b < 0 ? -b : b;

  while (absA >= absB) {
    absA -= absB;
  }
  return a < 0 ? -absA : absA;
}