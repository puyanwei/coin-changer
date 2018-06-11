describe('#CoinChanger', () => {
  beforeEach(() => {
    coinChanger = new CoinChanger(100);
  });

  describe('#initialise', () => {
    it('till has object by default', () => {
      expect(coinChanger.amount).toEqual(100);
      expect(coinChanger.till).toEqual({
        25: 0,
        10: 0,
        1: 0,
      });
    });
  });
});
