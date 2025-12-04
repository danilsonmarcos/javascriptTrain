 
const values = require('./joinStrings')

describe('joinStrings', () => {
  it('birthYear is 1947', () => {
    expect((values.birthYear).equal(1947));
  });
  it.skip('thisYear is 1965', () => {
    expect(values.thisYear).equal(1965);
  });
  it.skip('firstName is Carlos', () => {
    expect(values.firstName).equal('Carlos');
  });
  it.skip('lastName is Stevenson', () => {
    expect(values.lastName).equal('Stevenson');
  });
  it.skip('greeting is put together correctly', () => {
    expect(values.greeting).equal('Hello! My name is Carlos Stevenson and I am 18 years old.');
  });
});