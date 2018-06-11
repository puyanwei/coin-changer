function returnCoins(amount, coin) {
  if (amount < 0) {
    return 0;
  } else {
    return Math.floor(amount / coin);
  }
}

function returnChange(numerator, denominator) {
  return numerator % denominator;
}
