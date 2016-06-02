// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {
  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bowercopy');

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here

    // configure watch to auto update ----------------
    watch: {
      // for stylesheets, watch css and less files 
      // only run sass and cssmin stylesheets: 
      css: {
        options: {
          livereload: {
            host: 'localhost',
            port: 8888
          }
        },
        files: ['src/css/*.css', 'src/css/*.scss'], 
        tasks: ['sass', 'cssmin']
      },

      // for scripts, run jshint and uglify 
      scripts: { 
        options: {
          livereload: {
            host: 'localhost',
            port: 8888
          }
        },
        files: 'src/js/*.js', 
        tasks: ['jshint', 'uglify'] 
      } 
    },

    // configure jshint to validate js files -----------------------------------
    jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },

      // when this task is run, lint the Gruntfile and all js files in src
      build: ['Grunfile.js', 'src/**/*.js']
    },

    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/js/main.min.js': 'src/js/main.js'
        }
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded',
          loadPath: ['bower_components/uikit']
        },
        files: {                         // Dictionary of files
          'dist/css/main.css': 'scss/**/*.scss',
          'dist/css/main.css': 'src/css/main.scss'        // 'destination': 'source'
        }
      }
    },
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/css/main.min.css': 'dist/css/main.css'
        }
      }
    },

    // When a new bower component is installed,
    //    1) copy script files (below)
    //    2) run grunt bower
    //    3) include new js file in layout.pug
    //    4) if there are SASS files to import, include load path in sass task and @import them into main.scss
    bowercopy: {
      options: {
        srcPrefix: 'bower_components'
      },
      scripts: {
        options: {
          destPrefix: 'dist/vendor/js'
        },
        files: {
          'jquery/jquery.min.js': 'jquery/dist/jquery.min.js',
          'uikit/uikit.min.js': 'uikit/js/uikit.min.js',
          'uikit/dropdown.min.js': 'uikit/js/core/dropdown.min.js'
        }
      }
    }

  });

  grunt.registerTask('bower', ['bowercopy']); 
  grunt.registerTask('default', ['jshint', 'uglify', 'sass', 'cssmin', 'watch']); 
};