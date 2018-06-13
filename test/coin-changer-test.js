describe('#CoinChanger', () => {
    beforeEach(() => {
        coinChanger = new CoinChanger(314);
    });

    describe('#initialise', () => {
        it('till has object by default', () => {
            expect(coinChanger.amount).toEqual(39);
            expect(coinChanger.till).toEqual({
                100: [],
                50: [],
                25: [],
                10: [],
                1: [],
            });
        });
    });

    describe('#addToTillAndUpdateAmount', () => {
      it('Adds number of hundreds to the till array, and updates the amount left', () => {
        coinChanger.addToTillAndUpdateAmount(300, 100);
        expect(coinChanger.till).toEqual({
            100: [100, 100, 100],
            50: [],
            25: [],
            10: [],
            1: [],
        };);
        expect(coinChanger.amount).toEqual(14);
      });
    //   it('Adds number of dimes to the till by the letter D, and updates the amount left', () => {
    //     coinChanger.addToTillAndUpdateAmount(10, 'D');
    //     expect(coinChanger.till).toEqual({ 25: 0, 10: 'DDD', 1: 0 });
    //     expect(coinChanger.amount).toEqual(9);
    //   });
    //   it('Adds number of pennies to the till, and updates the amount left', () => {
    //     coinChanger.amount = 4;
    //     coinChanger.addToTillAndUpdateAmount(1, 'P');
    //     expect(coinChanger.till).toEqual({ 25: 0, 10: 0, 1: 'PPPP' });
    //     expect(coinChanger.amount).toEqual(0);
    //   });
    // });
    //
    // describe('#returnCoins', () => {
    //   it('Returns the correct amount of coins in a string', () => {
    //     coinChanger.amount = 89;
    //     let output = coinChanger.returnCoins();
    //     expect(output).toEqual('QQQDPPPP');
    //   });
    // });
});
