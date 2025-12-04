const { expect } = require("chai");
const numberChecker = require("./numberChecker");

describe('Number Added', function() {
  it('returns true when number is 1000', function() {
    expect(numberChecker(1000)).equal(true);
  });
  it.skip('returns true when number is 10', function() {
    expect(numberChecker(10)).equal(true);
  });
  it.skip('returns true when number is 9', function() {
    expect(numberChecker(9)).equal(false);
  });
  it.skip('returns true when number is 6', function() {
    expect(numberChecker(6)).equal(true);
  });
});