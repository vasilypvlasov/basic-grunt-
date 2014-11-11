module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            jade: {
                files: ['jade/**/*.jade', 'jade/*.jade'],
                tasks: []
            },
            stylus: {
                files: ['stylus/**/*.styl', 'stylus/*.styl'],
                tasks: []
            },
            coffee: {
                files: ['coffee/**/*.coffee', 'coffee/*.coffee'],
                tasks: []
            },
        },
    });

    // Load the plugin that provides the "uglify" task.
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task(s).
    grunt.registerTask('default', ['watch']);

};
