module.exports = function (grunt) {
    grunt.initConfig({
        // Merge and compress javascript code into dist/js/main.min.js
        uglify: {
            dist: {
                files: {
                    'dist/js/main.min.js': ['src/js/jquery-3.1.1.min.js', 'src/js/waypoints/lib/jquery.waypoints.min.js', 'src/js/*.js', 'src/js/main.js']
                }
            }
        },
        // Merge and compress css code into dist/css/styles.min.css
        cssmin: {
            dist: {
                files: {
                    'dist/css/styles.min.css': ['src/css/*.css']
                }
            }
        },
        // Merge script and css calls together to make only 2 calls (dist/js/main.min.js) and (dist/css/styles.min.css)
        processhtml: {
            dist: {
                files: {
                    'index.html': ['src/index.html']
                }
            }
        },
        // Minify html code
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
                tasks: ['cssmin']
            },
            index: {
                files: 'src/index.html',
                tasks: ['cssmin', 'processhtml', 'htmlmin']
            }
        }
    })

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-processhtml')
    grunt.loadNpmTasks('grunt-contrib-htmlmin')
    grunt.loadNpmTasks('grunt-contrib-watch')

    // Define tasks
    // Default task : grunt command
    grunt.registerTask('default', ['uglify', 'cssmin', 'processhtml', 'htmlmin'])
}
