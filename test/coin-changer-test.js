describe('#CoinChanger', () => {
    beforeEach(() => {
        coinChanger = new CoinChanger(314);
    });

    describe('#initialise', () => {
        it('till has object by default', () => {
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
    // it('Adds number of fifties to the till array, and updates the amount left', () => {
    //     coinChanger.addToTillAndUpdateAmount(50);
    //     expect(coinChanger.till).toEqual({
    //         100: [],
    //         50: [50, 50, 50, 50, 50, 50],
    //         20: [],
    //         10: [],
    //         5: [],
    //         1: [],
    //     });
    //     expect(coinChanger.amount).toEqual(14);
    // });
    // describe('#returnCoins', () => {
    //   it('Returns the correct amount of coins in a string', () => {
    //     coinChanger.amount = 89;
    //     let output = coinChanger.returnCoins();
    //     expect(output).toEqual('QQQDPPPP');
    //   });
    // });
});
