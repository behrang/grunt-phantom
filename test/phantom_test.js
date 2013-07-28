'use strict';

var grunt = require('grunt'),
  wd = require('wd');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.phantom = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    var browser;
    test.expect(1);

    browser = wd.remote('localhost', 4444);
    browser.init({}, function (err) {
      test.ifError(err);
      test.done();
    });
  },
  custom_options: function(test) {
    var browser;
    test.expect(1);

    browser = wd.remote('localhost', 5555);
    browser.init({}, function (err) {
      test.ifError(err);
      test.done();
    });
  },
};
