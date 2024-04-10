module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        less: {
            dev: {
                files: {
                    'build/style.css' : 'src/style.less'
                }
            },

            dist:{
                options:{
                    compress: true
                },
                files: {
                    'build/style.min.css' : 'src/style.less'
                }
            }
        },


        uglify:{
            target:{
                files:{
                    'build/appmin.js' : 'src/app.js'
                }
            },
        },
        

        copy: {
            main: {
                files:{
                    './build/index.html' : './src/index.html'
                }
            }
        },

    });
  

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');


    grunt.registerTask('default', ['copy', 'less:dev', 'uglify']);
  
  };