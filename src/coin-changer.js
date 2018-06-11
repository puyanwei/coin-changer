class CoinChanger {
  constructor(amount) {
    this.amount = amount;
    this.till = { 25: 0, 10: 0, 1: 0 };
  }

  quarters() {
    this.till[25] = 'Q'.repeat(Math.floor(this.amount / 25));
    this.amount = this.amount % 25;
  }

  dimes() {
    this.till[10] = 'D'.repeat(Math.floor(this.amount / 10));
    this.amount = this.amount % 10;
  }

  pennies() {
    this.till[1] = 'P'.repeat(Math.floor(this.amount / 1));
    this.amount = this.amount % 1;
  }

  returnCoins() {
    this.quarters();
    this.dimes();
    this.pennies();
    let string = this.till[25].concat(this.till[10]).concat(this.till[1]);
    return string;
    console.log(this.till, this.amount);
  }
}
