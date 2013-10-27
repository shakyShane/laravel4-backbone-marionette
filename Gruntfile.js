'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            js: 'public/js',
            css: 'public/css',
            sass: 'public/sass',
            bower: 'public/components',
            php: {
                layout: 'app/views/layouts'
            }
        },
        files: {
            js: {
                js_deps: '<%= dirs.js %>/dist/deps',
                js_amd: '<%= dirs.js %>/dist/modules',
                js_all: '<%= dirs.js %>/dist/combined',
                js_dist_file: '<%= files.js.js_all %>.min.js'
            },
            css: {
                dist: '<%= dirs.css %>/style.css'

            },
            php: {
                layout: '<%= dirs.php.layout %>/master.blade.php'
            }
        },
        concat: {
            deps: {
                files: [
                    {
                        src: [
                            '<%= dirs.bower %>/jquery/jquery.min.js',
                            '<%= dirs.bower %>/backbone.marionette/public/javascripts/json2.js',
                            '<%= dirs.bower %>/backbone.marionette/public/javascripts/underscore.js',
                            '<%= dirs.bower %>/backbone.marionette/public/javascripts/backbone.js',
                            '<%= dirs.bower %>/backbone.marionette/lib/backbone.marionette.min.js'
                        ],
                        dest: '<%= files.js.js_deps %>.js'
                    }
                ]
            },
            all: {
                files: [
                    {
                        src: [
                            '<%= files.js.js_deps %>.min.js',
                            '<%= dirs.bower %>/requirejs/require.js',
                            '<%= files.js.js_amd %>.js'
                        ],
                        dest: '<%= files.js.js_all %>.js'
                    }
                ]
            }
        },
        uglify: {
            deps: {
                files: [
                    {
                        src: '<%= files.js.js_deps %>.js',
                        dest: '<%= files.js.js_deps %>.min.js'
                    }
                ]
            },
            all: {
                files: [
                    {
                        src: '<%= files.js.js_all %>.js',
                        dest: '<%= files.js.js_all %>.min.js'
                    }
                ]
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: '<%= dirs.sass %>',
                    cssDir: '<%= dirs.css %>',
                    environment: 'production',
                    outputStyle: 'compressed'
                }
            },
            dev: {
                options: {
                    sassDir: '<%= dirs.sass %>',
                    cssDir: '<%= dirs.css %>',
                    outputStyle: 'expanded'
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: '<%= dirs.js %>/src',
                    name: 'main',
                    out: "<%= files.js.js_amd %>.js"
                }
            }
        },
        watch: {
            sass: {
                files: '<%= dirs.sass %>/**',
                tasks: ['compass']
            },
            jshint: {
                files: ['<%= dirs.js %>/src/**/*.js', '<%= dirs.js %>/test/**/*.js'],
                tasks: 'jshint'
            }
        },
        browser_sync: {
            files: {
                src: '<%= dirs.css %>/style.css'
            },
            options: {
                watchTask: true
            }
        },
        karma: {
            unit: {
                configFile: '<%= dirs.js %>/karma.conf.js',
                singleRun: true
            },
            watch: {
                configFile: '<%= dirs.js %>/karma.conf.js',
                singleRun: false
            }
        },
        jshint: {
            options: {
                jshintrc: '<%= dirs.js %>/.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib: {
                src: ['<%= dirs.js %>/src/**/*.js']
            },
            test: {
                src: ['<%= dirs.js %>/test/**/*.js']
            }
        },
        cachebreaker: {
            js: {
                options: {
                    asset_url: '<%= files.js.js_dist_file %>',
                    remove: 'public'
                },
                files: {
                    '<%= files.php.layout %>': ['<%= files.php.layout %>']
                }
            },
            css: {
                options: {
                    asset_url: '<%= files.css.dist %>',
                    remove: 'public'
                },
                files: {
                    '<%= files.php.layout %>': ['<%= files.php.layout %>']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-cache-breaker');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    /** Build Javascript Dependencies into single file **/
    grunt.registerTask('js-deps', ['concat:deps', 'uglify:deps']);

    /** Build the personal AMD modules into a single file **/
    grunt.registerTask('js-amd', ['requirejs', 'concat:all']);

    /** Lint & run tests */
    grunt.registerTask('test', ['jshint', 'concat:deps', 'karma:unit']);

    /** Watch & run tests on file-change */
    grunt.registerTask('test-watch', ['concat:deps', 'jshint', 'karma:watch']);

    /** Combine Dependencies, RequireJS & all Modules into a single file. **/
    grunt.registerTask('build-js', ['jshint', 'concat:deps', 'uglify:deps', 'requirejs', 'concat:all', 'uglify:all', 'cachebreaker:js']);

    /** Run compass & the CSS cachebreaker **/
    grunt.registerTask('build-css', ['compass', 'cachebreaker:css']);

    /** Run JS tests, build JS and build CSS */
    grunt.registerTask('release', ['test', 'build-js', 'build-css']);

    /** Run the Live reload server (watches files in the public/sass directory **/
    grunt.registerTask('server-sass', ['browser_sync', 'watch:sass']);

};