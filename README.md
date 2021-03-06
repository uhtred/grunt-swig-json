# grunt-swig-json

> The best Grunt plugin ever.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-swig-json --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-swig-json');
```

## The "swig_json" task

### Overview
In your project's Gruntfile, add a section named `swig` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  swig_json: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```
### Usage Examples

#### Default Options

```js
grunt.initConfig({
  swig_json: {
      default_options: {
          options: {},
          files: [{
              expand: true,
              flatten: true,
              src: ['templates/*.tpl'],
              dest: "tmp/",
              ext: '.html'
          }]
      }
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2015 Daniel França. Licensed under the MIT license.
