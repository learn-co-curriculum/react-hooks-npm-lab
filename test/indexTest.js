const expect = chai.expect;

describe('index.js', function () {
  describe('displayTime()', function () {
    it('can successful access moment() from the momentjs node module', function () {
      expect(moment()).to.exist
    });
  });
});
