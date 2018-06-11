class CoinChanger {
  constructor(amount) {
    this.amount = amount;
    this.till = { 25: 0, 10: 0, 1: 0 };
  }

  quarters() {
    this.till[25] = this.amount / 25;
    this.amount = Math.floor(this.amount % 25);
  }

  dimes() {
    this.till[10] = this.amount / 10;
    this.amount = Math.floor(this.amount % 10);
  }

  pennies() {
    this.till[1] = this.amount / 1;
    this.amount = Math.floor(this.amount % 1);
  }
}
