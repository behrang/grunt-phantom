# grunt-phantom

> Start PhantomJS web driver.

[![Build Status](https://travis-ci.org/behrang/grunt-phantom.png?branch=master)](https://travis-ci.org/behrang/grunt-phantom)
[![Dependency Status](https://gemnasium.com/behrang/grunt-phantom.png)](https://gemnasium.com/behrang/grunt-phantom)
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/behrang/grunt-phantom/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-phantom --save-dev
```
The plugin assumes you have PhantomJS installed globally. If you do not wish to have it installed globally, you can install it as an optional dependency:

```shell
# From your project's root directory
cd node_modules/grunt-phantom/
npm install --optional
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-phantom');
```

## The "phantom" task

### Overview
In your project's Gruntfile, add a section named `phantom` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  phantom: {
    options: {
      port: 4444
    },
    your_target: {
    },
    another_target: {
      options: {
        port: 5555
      }
    }
  }
})
```

### Options

#### port
Type: `Number`
Default value: `4444`

The web driver port in PhantomJS. Effectively:

    phantomjs --webdriver=4444

### Usage Examples

#### Default Options
In case you want to use the default 4444 port, you can omit the `port` option. Otherwise, if you want to use a different web driver port, set it like this:

```js
grunt.initConfig({
  phantom: {
    options: {
      port: 5555
    },
    cucumber: {
    }
  }
})
```

#### Multiple PhantomJS instances
If you need to run multiple web drivers, you can have multiple targets:

```js
grunt.initConfig({
  phantom: {
    options: {
      port: 5555
    },
    cucumber: {
    },
    mocha: {
      options: {
        port: 6666
      }
    }
  },
})
```

Here, if you run `grunt phantom`, two web drivers will be launched, cucumber on port 5555 and mocha on port 6666.

#### PhantomJS Output
If you want to see the output of PhantomJS, pass `--debug` option to your grunt command:

```shell
  grunt phantom --debug
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
