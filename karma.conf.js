// This file specifies that how we wanna run our tests

var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'], // specify the browsers we want our tests to run on. These tests are being run on real browsers
    singleRun: true,
    frameworks: ['mocha'], //This is telling karma to use Mocha framework where 'describe' & 'it' functions are written to use in our tests
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/foundation-sites/dist/foundation.min.js',
      'app/tests/**/*.test.jsx'
    ],// test files that we want to be executed, specify a Globbing pattern to match the files that have our tests
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    }, // the files where we're specifying the things we'll do with our test files
    reporters: ['mocha'], // the thing that shows us - which test has passed & which test has failed
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
