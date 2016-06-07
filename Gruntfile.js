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
  grunt.loadNpmTasks('grunt-contrib-imagemin');

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
      },

      images: {
        options: {
          livereload: {
            host: 'localhost',
            port: 8888
          }
        },
        files: ['src/img/*.png', 'src/img/*.svg'],
        tasks: ['imagemin'] 
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
          'dist/js/tree.min.js': 'src/js/tree.js',
          'dist/js/main.min.js': 'src/js/main.js'
        }
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded',
          loadPath: ['bower_components']
        },
        files: {                                          // 'destination': 'source'
          'dist/css/main.css': 'salesforce-lightning-design-stystem/scss/**/*.scss',          //  dist : SLDS
          'dist/css/main.css': 'src/css/**/*.scss'        //  dist : my custom CSS
        }
      }
    },
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/css/main.min.css': 'dist/css/main.css'  //  my custom minified : my custom compiled CSS
        }
      }
    },

    imagemin:{
      'dist/img/cloudlogo.png': 'src/img/cloudlogo.png',
      'dist/img/cloudlogo_words.svg': 'src/img/cloudlogo_words.svg',
      'dist/img/search.svg': 'src/img/search.svg',
      'dist/img/create.svg': 'src/img/create.svg',
      'dist/img/favorite.svg': 'src/img/favorite.svg',
      'dist/img/help.svg': 'src/img/help.svg',
      'dist/img/setup.png': 'src/img/setup.png',
      'dist/img/notification.svg': 'src/img/notification.svg',
      'dist/img/profile.png': 'src/img/profile.png',
      'dist/img/setup_hover.png': 'src/img/setup_hover.png',
      'dist/img/setupmenu_01.svg': 'src/img/setupmenu_01.svg',
      'dist/img/setupmenu_02.svg': 'src/img/setupmenu_02.svg',
      'dist/img/setupmenu_03.svg': 'src/img/setupmenu_03.svg',
      'dist/img/setupmenu_04.svg': 'src/img/setupmenu_04.svg',
      'dist/img/setupmenu_05.svg': 'src/img/setupmenu_05.svg',
      'dist/img/appnav.svg': 'src/img/appnav.svg',
      'dist/img/setupmenu_global.svg': 'src/img/setupmenu_global.svg',
      'dist/img/setupmenu_dev.svg': 'src/img/setupmenu_dev.svg',
      'dist/img/close.svg': 'src/img/close.svg',
      'dist/img/chevron_right.svg': 'src/img/chevron_right.svg',
      'dist/img/setup-home-stats.png': 'src/img/setup-home-stats.png',
      'dist/img/back.svg': 'src/img/back.svg',
      'dist/img/layercake_gear.svg': 'src/img/layercake_gear.svg'
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
          destPrefix: 'dist/vendor'
        },
        files: {
          'jquery/jquery.min.js': 'jquery/dist/jquery.min.js'
        }
      }
    }

  });

  grunt.registerTask('bower', ['bowercopy']); 
  grunt.registerTask('default', ['jshint', 'uglify', 'sass', 'cssmin', 'imagemin', 'watch']); 
};