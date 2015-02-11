describe("coinCombination", function() {
  it("return a penny for every cent under 5", function() {
    expect(coinCombination(1)).to.eql([1,0,0,0]);
  });
});
