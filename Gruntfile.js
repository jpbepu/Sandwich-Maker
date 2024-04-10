module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        less: {
            development: {
                files: {
                    'build/style.css' : 'src/style.less'
                }
            },

            production:{
                options:{
                    compress: true
                },
                files: {
                    'build/main.min.css' : 'src/main.less'
                }
            }
        },


        uglify:{
            target:{
                files:{
                    'build/app.min.js' : 'src/app.js'
                }
            }
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


    grunt.registerTask('default', ['copy', 'less', 'uglify']);
  
  };