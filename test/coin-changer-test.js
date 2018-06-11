describe('#CoinChanger', () => {
  let coinChanger;
  beforeEach(() => {
    coinChanger = new CoinChanger();
  });

  describe('#initialise', () => {
    it('till has object by default', () => {
      expect(coinChanger.till).toEqual({
        25: 0,
        10: 0,
        1: 0,
      });
    });
  });
});
