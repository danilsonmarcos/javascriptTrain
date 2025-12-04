const { expect } = require("chai");
const {a,b,c,d,e,f} = require('./mathEquations');

describe('math', function() {
  it('a is 0', function() {
    expect(a).equal(0);
  });
  it.skip('b is 9', function() {
    expect(b).equal(9);
  });
  it.skip('c is 66', function() {
    expect(c).equal(66);
  });
  it.skip('d is 1', function() {
    expect(d).equal(1);
  });
  it.skip('e is -8', function() {
    expect(e).equal(-8);
  });
  it.skip('f is 68', function() {
    expect(f).equal(68);
  });
});