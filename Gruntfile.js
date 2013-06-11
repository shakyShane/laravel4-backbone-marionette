module.exports = function( grunt ) {
  grunt.initConfig({
    pkg               : grunt.file.readJSON( 'package.json' ),
    js_dir            : 'public/js',
    js_deps           : '<%= js_dir %>/dist/deps',
    js_amd            : '<%= js_dir %>/dist/modules',
    js_all            : '<%= js_dir %>/dist/combined',
    js_dist_file      : '<%= js_all %>.clean.min.js',
    php_files         : {
      layout : 'app/views/layouts/master.blade.php'
    },
    sass_dir          : 'public/sass',
    css_dir           : 'public/css',
    css_dist_file     : 'public/css/style.css',
    concat            : {
      deps  : {
        files : [
          {
            src  : [
              /** todo - Automate the insertion of these file paths **/
              'public/components/jquery/jquery.min.js',
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
              'public/components/requirejs/require.js', /** todo - Automate the insertion of this file path **/
              '<%= js_amd %>.js'
            ],
            dest : '<%= js_all %>.js'
          }
        ]
      }
    },
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
    compass : {
      dist : {
        options : {
          sassDir     : '<%= sass_dir %>',
          cssDir      : '<%= css_dir %>',
          environment : 'production',
          outputStyle : 'compressed'
        }
      },
      dev  : {
        options : {
          sassDir : '<%= sass_dir %>',
          cssDir  : '<%= css_dir %>',
          outputStyle : 'expanded'
        }
      }
    },
    watch : {
      compass : {
        files : '<%= sass_dir %>/**',
        tasks : ['compass', 'livereload']
      }
    },
    requirejs : {
      compile : {
        options : {
          baseUrl : 'public/js/src',
          name    : 'main',
          out     : "<%= js_amd %>.js"
        }
      }
    },
    regarde : {
      css : {
        files : '<%= sass_dir %>/**',
        tasks : ['compass', 'livereload']
      }
    },
    removelogging : {
      dist : {
        src  : "<%= js_all %>.min.js",
        dest : "<%= js_dist_file %>"
      }
    },
    karma : {
      unit : {
        configFile : 'public/js/karma.conf.js'
      }
    },
    cachebreaker : {
      js : {
        options : {
          asset_url : '<%= js_dist_file %>',
          remove    : 'public'
        },
        files   : {
          '<%= php_files.layout %>' : ['<%= php_files.layout %>']
        }
      },
      css : {
        options : {
          asset_url : '<%= css_dist_file %>',
          remove    : 'public'
        },
        files   : {
          '<%= php_files.layout %>' : ['<%= php_files.layout %>']
        }
      }
    }
  });

  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-contrib-concat' );
  grunt.loadNpmTasks( 'grunt-contrib-compass' );
  grunt.loadNpmTasks( 'grunt-contrib-requirejs' );
  grunt.loadNpmTasks( 'grunt-regarde' );
  grunt.loadNpmTasks( 'grunt-contrib-livereload' );
  grunt.loadNpmTasks( "grunt-remove-logging" );
  grunt.loadNpmTasks( 'grunt-karma' );
  grunt.loadNpmTasks( 'grunt-cache-breaker' );

  /** Build Javascript Dependencies into single file **/
  grunt.registerTask( 'js-deps', ['concat:deps', 'uglify:deps'] );

  /** Build the personal AMD modules into a single file **/
  grunt.registerTask( 'js-amd', ['requirejs', 'concat:all'] );

  /** Combine Dependencies, RequireJS & all Modules into a single file. **/
  grunt.registerTask( 'js-all', ['concat:deps', 'uglify:deps', 'requirejs', 'concat:all', 'uglify:all', 'removelogging', 'cachebreaker:js'] );

  /** Run the Live reload server (watches files in the public/sass directory **/
  grunt.registerTask( 'server-sass', ['livereload-start', 'regarde:css']);

};