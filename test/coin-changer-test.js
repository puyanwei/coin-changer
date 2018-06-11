describe('Gives the correct change', () => {
  it('Returns correct the number of quarters', () => {
    expect(convertToQuarters(75)).toEqual(3);
  });
});
