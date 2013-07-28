# grunt-phantom

> Start PhantomJS web driver.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-phantom --save-dev
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
      options: {
        port: 5555
      }
    },
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
In case you want to use the default 4444 port, you can omit the configuration. Otherwise, if you want to use a different web driver port, set it like this:

```js
grunt.initConfig({
  phantom: {
    options: {
      port: 5555
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
    wd1: {
    },
    wd2: {
      options: {
        port: 6666
      }
    }
  },
})
```

Here, if you run `grunt phantom`, two web drivers will be launched, wd1 on port 5555 and wd2 on port 6666.

#### PhantomJS Output
If you want to see the output of PhantomJS, pass `--debug` option to your grunt command:

```shell
  grunt phantom --debug
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
