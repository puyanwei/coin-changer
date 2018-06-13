class CoinChanger {
    constructor(amount) {
        this.amount = amount;
        this.till = {
            100: [],
            50: [],
            20: [],
            10: [],
            5: [],
            1: [],
        };
    }

    addToTillAndUpdateAmount(coin) {
        let noOfCoins = Math.floor(this.amount / coin);
        this.till[coin] = Array(noOfCoins).fill(coin);
        this.amount = this.amount % coin;
    }

    returnCoins() {
        let array = new Array();

        Object.keys(this.till)
            .reverse()
            .forEach((key) => {
                this.addToTillAndUpdateAmount(key);
            });

        Object.keys(this.till).forEach((key) => {
            if (this.till[key].length !== 0) {
                this.till[key].map((element) => {
                    array.unshift(parseInt(element));
                });
            }
        });
        return array;
    }
}
