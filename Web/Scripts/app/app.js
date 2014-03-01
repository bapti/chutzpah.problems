require.config({
    baseUrl: function() {
      if (window.jasmineSettings != null && window.jasmineSettings.scriptsPath != null) {
        return window.jasmineSettings.scriptsPath;
      } else {
        return "/Scripts";
      }}(),
    urlArgs: "",
    waitSeconds: 10,
    paths: {
        squire:         './lib/test/squire',
        sinon:          './lib/test/sinon',
        'jasmine':      './lib/test/jasmine',
        'jasmine-html': './lib/test/jasmine-html',
        'boot':         './lib/test/boot'
        
    },
    shim: {
        'sinon': {
            exports: "sinon"
        },
        'jasmine': {
          exports: 'jasmine'
        },
        'jasmine-html': {
          deps: ['jasmine'],
          exports: 'jasmine'
        },
        'boot': {
          deps: ['jasmine', 'jasmine-html'],
          exports: 'jasmine'
        }
    }
});
