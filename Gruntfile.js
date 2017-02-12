module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        uglify: {
            dist: {
                files: {
                    'dist/js/main.min.js': ['src/js/jquery-3.1.1.min.js', 'src/js/waypoints/lib/jquery.waypoints.min.js', 'src/js/*.js', 'src/js/main.js']
                }
            }
        },
        uncss: {
            options : {
                ignore : ['.animated', '.fadeInLeft', '.fadeInRight', '.fadeIn']
            },
            dist: {
                files: {
                    'dist/css/styles.min.css': ['src/index.html']
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'dist/css/styles.min.css': ['dist/css/styles.min.css']
                }
            }
        },
        processhtml: {
            dist: {
                files: {
                    'index.html': ['src/index.html']
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'index.html': 'index.html'
                }
            }
        },
        watch: {
            scripts: {
                files: 'src/js/*.js',
                tasks: ['uglify']
            },
            styles: {
                files: 'src/css/*.css',
                tasks: ['uncss', 'cssmin']
            },
            index: {
                files: 'src/index.html',
                tasks: ['uncss', 'cssmin', 'processhtml', 'htmlmin']
            }
        }
    })

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-uncss')
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-processhtml')
    grunt.loadNpmTasks('grunt-contrib-htmlmin')
    grunt.loadNpmTasks('grunt-contrib-watch')

    // Define tasks
    grunt.registerTask('default', ['uglify', 'uncss', 'cssmin', 'processhtml', 'htmlmin'])
}
