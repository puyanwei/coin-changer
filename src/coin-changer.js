class CoinChanger {
  constructor(amount) {
    this.amount = amount;
    this.till = { 25: 0, 10: 0, 1: 0 };
  }

  addToTillAndUpdateAmount(coin, letter) {
    this.till[coin] = letter.repeat(Math.floor(this.amount / coin));
    this.amount = this.amount % coin;
  }

  returnCoins() {
    this.addToTillAndUpdateAmount(25, 'Q');
    this.addToTillAndUpdateAmount(10, 'D');
    this.addToTillAndUpdateAmount(1, 'P');
    let string = this.till[25].concat(this.till[10]).concat(this.till[1]);
    return string;
  }
}
