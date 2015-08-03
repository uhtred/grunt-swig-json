/*
 * grunt-swig
 *
 *
 * Copyright (c) 2015 Daniel França
 * Licensed under the MIT license.
 */

'use strict';

var swig = require('swig'),
		path = require('path');

module.exports = function(grunt) {

    grunt.registerMultiTask('swig_json', 'The best Grunt plugin ever.', function() {

        var options = this.options({
            swigOptions: {},
        });

        this.files.forEach(function(file) {

            var src = file.src.filter(function(filepath) {
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            });

            src.forEach(function(filepath) {

                var outputFile = path.basename(filepath, path.extname(filepath)),
                    tplVars;

                try {
                    tplVars = grunt.file.readJSON(path.dirname(filepath) + '/' + outputFile + ".json");
                } catch (err) {
                    tplVars = {};
                }

                grunt.file.write(file.dest, swig.renderFile(filepath, tplVars));

                //grunt.log.writeln(path.dirname(filepath) + '/' + outputFile + ".json" + ' --- ' + JSON.stringify(tplVars));
                grunt.log.writeln('✔ ' + filepath + " -> " + file.dest);
            });

        });

    });

};
