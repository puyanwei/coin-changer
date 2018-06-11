function convertToQuarters(num) {
  if (num < 0) {
    return 0;
  } else {
    return Math.floor(num / 25);
  }
}
