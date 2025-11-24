const { expect } = require("chai");
const addNumber = require('./addNumber');

describe('Number Added', function() {
  it('add the numbers together', function() {
    expect(addNumber()).equal(2);
  });
});