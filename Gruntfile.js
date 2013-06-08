module.exports = function( grunt ) {

  grunt.initConfig( {

    pkg               : grunt.file.readJSON( 'package.json' ),
    js_dir            : 'public/js/',
    js_deps           : '<%= js_dir %>dist/deps',
    js_amd            : '<%= js_dir %>dist/modules',
    js_all            : '<%= js_dir %>dist/combined',
    concat            : {
      deps  : {
        files : [
          {
            src  : [
              'public/components/backbone.marionette/public/javascripts/json2.js',
              'public/components/backbone.marionette/public/javascripts/underscore.js',
              'public/components/backbone.marionette/public/javascripts/backbone.js',
              'public/components/backbone.marionette/lib/backbone.marionette.min.js'
            ],
            dest : '<%= js_deps %>.js'
          }
        ]
      },
      all : {
        files : [
          {
            src : [
              '<%= js_deps %>.min.js',
              'public/components/requirejs/require.js',
              '<%= js_amd %>.js'
            ],
            dest : '<%= js_all %>.js'
          }
        ]
      }
    },
    // Uglify
    uglify : {
      deps : {
        files : [
          {
            src  : '<%= js_deps %>.js',
            dest : '<%= js_deps %>.min.js'
          }
        ]
      },
      all : {
        files : [
          {
            src  : '<%= js_all %>.js',
            dest : '<%= js_all %>.min.js'
          }
        ]
      }
    },
    // Compass for SASS - Use external Config File.
    compass : {
      dist : {
        options : {
          config : 'config.rb'
        }
      }
    },
    // Watchers
    watch : {
      compass : {
        files : '<%= sass_dir %>',
        tasks : ['compass']
      }
    },
    // Require JS
    requirejs : {
      compile : {
        options : {
          baseUrl : 'public/js/src',
          name    : 'main',
          out     : "<%= js_amd %>.js"
        }
      }
    },
    // Live Reload
    livereload        : {
      port : 35729 // Default livereload listening port.
    },
    // Configuration to be run (and then tested)
    regarde           : {
      // Any Sass to reload
      css            : {
        files : '<%= sass_dir %>',
        tasks : ['compass', 'livereload']
      },
      // Any Blade views to reload.
      blade          : {
        files : '../../app/views/**',
        tasks : ['livereload']
      },
      js             : {
        files : '<%= amd_dir %>/modules/*',
        tasks : ['livereload']
      },
      js_pub         : {
        files : ['../js/scripts/*'],
        tasks : ['js-pub']
      },
      js_pub_modules : {
        files : ['../js/modules/*'],
        tasks : ['js-pub']
      },
      jstests        : {
        files : '<%= amd_dir %>/tests/spec/*.js',
        tasks : ['livereload']
      },
      adminjs        : {
        files : '<%= admin_scripts_dir %>/*',
        tasks : ['js-admin']
      }
    },
    removelogging     : {
      dist : {
        src  : "<%= all_combined_js %>.min.js",
        dest : "<%= all_combined_js %>.clean.min.js"
      }
    },
    replace           : {
      dist : {
        options : {
          variables : {
            'timestamp' : '<%= new Date().getTime() %>'
          }
        },
        files   : [
          {
            src  : [
              '../../app/views/account/index.temp.blade.php'
            ],
            dest : [
              '../../app/views/account/index.blade.php'
            ]
          }
        ]
      },
      css  : {
        options : {
          variables : {
            'timestamp' : '<%= new Date().getTime() %>'
          }
        },
        files   : [
          { src : ['../../app/views/layouts/master.temp.blade.php'], dest : '../../app/views/layouts/master.blade.php' }
        ]
      }
    }
  } );

  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-contrib-concat' );
  grunt.loadNpmTasks( 'grunt-contrib-compass' );
  grunt.loadNpmTasks( 'grunt-contrib-requirejs' );
  grunt.loadNpmTasks( 'grunt-regarde' );
  grunt.loadNpmTasks( 'grunt-contrib-connect' );
  grunt.loadNpmTasks( 'grunt-contrib-livereload' );
  grunt.loadNpmTasks( 'grunt-bower-requirejs' );
  grunt.loadNpmTasks( "grunt-remove-logging" );
  grunt.loadNpmTasks( 'grunt-replace' );

  /** Build Javascript Dependencies into single file **/
  grunt.registerTask( 'js-deps', ['concat:deps', 'uglify:deps'] );

  /** Build the personal AMD modules into a single file **/
  grunt.registerTask( 'js-amd', ['requirejs', 'concat:all'] );

  /** Combine Dependencies, RequireJS & all Modules into a single file. **/
  grunt.registerTask( 'js-all', ['concat:deps', 'requirejs', 'concat:all', 'uglify:all', 'removelogging', 'replace:dist'] );

  grunt.registerTask( 'cache-break', ['replace:css'] );

  /** Build the Public Javascript File **/
  grunt.registerTask( 'js-pub', ['concat:pub', 'uglify:pub'] );

  /** Build for Admin scripts **/
  grunt.registerTask( 'js-admin', ['concat:admin', 'uglify:admin'] );

  /** Run the Live reload server (watches SASS, BLADE & JS files) **/
  grunt.registerTask( 'server-all', ['livereload-start', 'regarde'] );
  grunt.registerTask( 'server-sass', ['livereload-start', 'regarde:css'] );

};