module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        // uncss: {
        //     dist: {
        //         files: {
        //             'css/styles.min.css': ['index.html']
        //         }
        //     }
        // },
        cssmin: {
            dist: {
                files: {
                    'css/styles.min.css': ['css/*.css']
                }
            }
        }
    })

    // Load plugins
    // grunt.loadNpmTasks('grunt-uncss')
    grunt.loadNpmTasks('grunt-contrib-cssmin')

    // Define tasks
    grunt.registerTask('default', ['cssmin'])
}
