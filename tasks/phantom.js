/*
 * grunt-phantom
 * https://github.com/behrang/grunt-phantom
 *
 * Copyright (c) 2013 Behrang Noruzi Niya
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('phantom', 'Start PhantomJS web driver.', function() {
    var options, port, stopped, fatal, done, phantom, binPath, which;

    // Try the global path first. Fallback to the phantom as an optional dependency.
    try {
      which = require('which');
      binPath = which.sync('phantomjs');
    } catch(e) {
      binPath = require('phantomjs').path;
    }

    // Merge task-specific and/or target-specific options with these defaults.
    options = this.options({
      port: 4444
    });

    port = options.port;
    stopped = false;
    // Get a handle on `fatal` function in case watch task overrides it.
    fatal = grunt.fatal;
    done = this.async();

    // Spawn PhantomJS.
    phantom = grunt.util.spawn({
      cmd: binPath,
      args: ['--webdriver=' + port].concat(options.args || [])
    }, function () {
      // It's a fatal error when spawned process is killed unexpectedly.
      stopped = true;
      fatal('PhantomJS killed unexpectedly');
    });

    // Log PhantomJS error.
    phantom.stderr.setEncoding('utf-8');
    phantom.stderr.on('data', function (chunk) {
      grunt.log.error('PhantomJS: ' + chunk);
    });

    // Log PhantomJS output.
    phantom.stdout.setEncoding('utf-8');
    phantom.stdout.on('data', function (chunk) {
      grunt.log.debug('PhantomJS: ' + chunk);
      // Wait for success message before resuming.
      if (!!~chunk.indexOf('running on port ' + port)) {
        grunt.log.ok('PhantomJS started on port ' + port);
        done();
      }
    });

    // Kill PhantomJS on exit.
    process.on('exit', function () {
      if (!stopped) {
        phantom.kill();
        grunt.log.ok('PhantomJS stopped');
      }
    });

  });

};
