module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jade: {
            compile: {
                options: {
                    //pretty: true
                    client: false,
                    pretty: true
                },
                files: [{
                    cwd: 'jade/',
                    src: ['**/*.jade'],
                    dest: 'app/',
                    expand: true,
                    ext: '.html'
                        //ext: '.html'
                }]
            }
        },

        stylus: {
            compile: {
                options: {
                    compress: false
                },
                files: [{
                    cwd: 'stylus/',
                    src: ['**/*.styl'],
                    dest: 'app/styles/',
                    expand: true,
                    ext: '.css'
                        //ext: '.html'
                }]
            }
        },

        coffee: {
            compile: {
                options: {
                    bare: true
                },
                expand: true,
                flatten: true,
                cwd: 'coffee/',
                src: ['**/*.coffee'],
                dest: 'app/scripts/',
                ext: '.js',
            },
        },

        watch: {
            jade: {
                files: ['jade/**/*.jade'],
                tasks: ['jade']
            },
            stylus: {
                files: ['stylus/**/*.styl'],
                tasks: ['stylus']
            },
            coffee: {
                files: ['coffee/**/*.coffee'],
                tasks: ['coffee']
            },
        },
    });

    // Load the plugin that provides the "uglify" task.
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    // Default task(s).
    grunt.registerTask('default', ['watch']);

};
