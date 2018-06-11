describe('#returnCoins', () => {
  it('Returns correct the number of quarters', () => {
    expect(returnCoins(75, 25)).toEqual(3);
    expect(returnCoins(63, 25)).toEqual(2);
    expect(returnCoins(70, 10)).toEqual(7);
    expect(returnCoins(63, 10)).toEqual(6);
    expect(returnCoins(-33, 25)).toEqual(0);
    expect(returnCoins(-33, 10)).toEqual(0);
  });
});

describe('#returnChange', () => {
  it('Returns remainder if there is any', () => {
    expect(returnChange(100, 23)).toEqual(8);
  });
});
