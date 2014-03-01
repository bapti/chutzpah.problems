(function() {
  require(['boot'], function() {
    return require( ["specs/example.spec.js"], function() {
      return window.onload();
    });
  });
}).call(this);
