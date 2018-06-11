describe('#convertToQuarters', () => {
  it('Returns correct the number of quarters', () => {
    expect(convertToQuarters(75)).toEqual(3);
    expect(convertToQuarters(63)).toEqual(2);
    expect(convertToQuarters(-33)).toEqual(0);
  });
});

describe('#convertToDimes', () => {
  it('Returns correct the number of quarters', () => {
    expect(convertToDimes(70)).toEqual(7);
  });
});

describe('#returnChange', () => {
  it('Returns remainder if there is any', () => {
    expect(returnChange(100, 23)).toEqual(8);
  });
});
