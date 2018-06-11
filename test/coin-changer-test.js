describe('#CoinChanger', () => {
  beforeEach(() => {
    coinChanger = new CoinChanger(39);
  });

  describe('#initialise', () => {
    it('till has object by default', () => {
      expect(coinChanger.amount).toEqual(39);
      expect(coinChanger.till).toEqual({ 25: 0, 10: 0, 1: 0 });
    });
  });

  describe('#quarters', () => {
    it('Adds number of quarters to the till by the letter Q, and updates the amount left', () => {
      expect(coinChanger.quarters());
      expect(coinChanger.till).toEqual({ 25: 'Q', 10: 0, 1: 0 });
      expect(coinChanger.amount).toEqual(14);
    });
  });

  describe('#dimes', () => {
    it('Adds number of dimes to the till by the letter D, and updates the amount left', () => {
      expect(coinChanger.dimes());
      expect(coinChanger.till).toEqual({ 25: 0, 10: 'DDD', 1: 0 });
      expect(coinChanger.amount).toEqual(9);
    });
  });

  describe('#pennies', () => {
    it('Adds number of pennies to the till, and updates the amount left', () => {
      coinChanger.amount = 4;
      expect(coinChanger.pennies());
      expect(coinChanger.till).toEqual({ 25: 0, 10: 0, 1: 'PPPP' });
      expect(coinChanger.amount).toEqual(0);
    });
  });

  describe('#returnCoins', () => {
    it('Returns the correct amount of coins in a string', () => {
      coinChanger.amount = 89;
      let output = coinChanger.returnCoins();
      expect(output).toEqual('QQQDPPPP');
    });
  });
});
