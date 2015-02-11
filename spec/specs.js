describe("coinCombo", function() {
  it("return a penny for every cent under 5", function() {
    expect(coinCombo(1)).to.eql([1,0,0,0]);
  });
  it("returns a nickel for every value over 5 and under 10", function(){
    expect(coinCombo(6)).to.eql([1,1,0,0]);
  });
  it("returns a dime for every value over 10 and under 25", function() {
    expect(coinCombo(16)).to.eql([1,1,1,0]);
  });
  it("returns a quarter for every value over 25", function() {
    expect(coinCombo(41)).to.eql([1,1,1,1]);
  });
});
