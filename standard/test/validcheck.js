
var expect = chai.expect;

describe('js/code4.js', _ => {
  it('Check email valid or not', () => {
    let result = validateEmail("vs@vs.net");
    expect(result).to.equal(true);
  })
})

describe('js/code4.js', _ => {
  it('Check that input contains only letters', () => {
    let result2 = let("VanooS");
    expect(result2).to.equal(true);
  })
})
