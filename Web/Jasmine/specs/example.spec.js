(function() {

  define([], function() {
    return describe('==== example test ====', function() {
      return describe('the test should', function() {
        return it('showcase toBe', function() {
          return expect(true).toBe(true);
        });
      });
    });
  });

}).call(this);
