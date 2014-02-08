/*jshint node: true */

module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: [
        'Gruntfile.js',
        'jquery.fade-rollover.js'
      ]
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.title %> v<%= pkg.version %> | <%= pkg.license %> */\n'
      },
      build: {
        files: {
          'build/jquery.fade-rollover-<%= pkg.version %>.min.js': 'jquery.fade-rollover.js'
        }
      }
    },
    watch: {
      build: {
        files: ['jquery.fade-rollover.js'],
        tasks: ['jshint', 'uglify']
      },
    }
  });

  // Loading dependencies
  for (var key in grunt.file.readJSON('package.json').devDependencies) {
    if (key !== 'grunt' && key.indexOf('grunt') === 0) {
      grunt.loadNpmTasks(key);
    }
  }

  grunt.registerTask('default', ['jshint', 'uglify']);
};