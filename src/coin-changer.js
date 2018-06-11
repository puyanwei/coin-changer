function convertToQuarters(num) {
  if (num < 0) {
    return 0;
  } else {
    return Math.floor(num / 25);
  }
}
function convertToDimes(num) {
  if (num < 0) {
    return 0;
  } else {
    return Math.floor(num / 10);
  }
}

function returnChange(numerator, denominator) {
  return numerator % denominator;
}
