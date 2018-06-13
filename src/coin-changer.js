class CoinChanger {
    constructor(amount) {
        this.amount = amount;
        this.till = {
            100: [],
            50: [],
            25: [],
            10: [],
            1: [],
        };
    }

    addToTillAndUpdateAmount(coin) {
        let noOfCoins = Math.floor(this.amount / coin);
        this.till[coin] = Array(noOfCoins).fill(coin);
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
