describe('#CoinChanger', () => {
    beforeEach(() => {
        coinChanger = new CoinChanger(314);
    });

    describe('#initialise', () => {
        it('till has object of denominators by default', () => {
            expect(coinChanger.amount).toEqual(314);
            expect(coinChanger.till).toEqual({
                100: [],
                50: [],
                20: [],
                10: [],
                5: [],
                1: [],
            });
        });
    });

    describe('#addToTillAndUpdateAmount', () => {
        it('Adds number of hundreds to the till array, and updates the amount left', () => {
            coinChanger.addToTillAndUpdateAmount(100);
            expect(coinChanger.till).toEqual({
                100: [100, 100, 100],
                50: [],
                20: [],
                10: [],
                5: [],
                1: [],
            });
            expect(coinChanger.amount).toEqual(14);
        });
        it('Adds number of fifties to the till array, and updates the amount left', () => {
            coinChanger.addToTillAndUpdateAmount(50);
            expect(coinChanger.till).toEqual({
                100: [],
                50: [50, 50, 50, 50, 50, 50],
                20: [],
                10: [],
                5: [],
                1: [],
            });
            expect(coinChanger.amount).toEqual(14);
        });
        it('Adds number of twenties to the till array, and updates the amount left', () => {
            coinChanger.amount = 45;
            coinChanger.addToTillAndUpdateAmount(20);
            expect(coinChanger.till).toEqual({
                100: [],
                50: [],
                20: [20, 20],
                10: [],
                5: [],
                1: [],
            });
            expect(coinChanger.amount).toEqual(5);
        });
        it('Adds number of tens to the till array, and updates the amount left', () => {
            coinChanger.amount = 45;
            coinChanger.addToTillAndUpdateAmount(10);
            expect(coinChanger.till).toEqual({
                100: [],
                50: [],
                20: [],
                10: [10, 10, 10, 10],
                5: [],
                1: [],
            });
            expect(coinChanger.amount).toEqual(5);
        });
        it('Adds number of fives to the till array, and updates the amount left', () => {
            coinChanger.amount = 17;
            coinChanger.addToTillAndUpdateAmount(5);
            expect(coinChanger.till).toEqual({
                100: [],
                50: [],
                20: [],
                10: [],
                5: [5, 5, 5],
                1: [],
            });
            expect(coinChanger.amount).toEqual(2);
        });
        it('Adds number of ones to the till array, and updates the amount left', () => {
            coinChanger.amount = 4;
            coinChanger.addToTillAndUpdateAmount(1);
            expect(coinChanger.till).toEqual({
                100: [],
                50: [],
                20: [],
                10: [],
                5: [],
                1: [1, 1, 1, 1],
            });
            expect(coinChanger.amount).toEqual(0);
        });
    });
    describe('#applyCountsAndreturnCoins', () => {
        it('Counts the denominators of money and then returns the correct amount of coins in an array', () => {
            coinChanger.amount = 199;
            let output = coinChanger.applyCountsAndreturnCoins();
            expect(output).toEqual([100, 50, 20, 20, 5, 1, 1, 1, 1]);
        });
    });
});
