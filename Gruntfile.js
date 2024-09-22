module.exports = function (grunt) {

    grunt.initConfig({


            compass: {
                dist: {
                    options: {
                        sassDir: 'static/sass',
                        cssDir: 'static/css'
                    }
                }
            },

            concat: {
                js: {
                    src: [
                        'static/js/vendor/modernizr-2.6.2.min.js',
                        'static/js/vendor/owl.carousel.min.js',
                        'static/js/vendor/fancyBox/jquery.fancybox.js',
                        'static/js/parts/ready.js'
                    ],
                    dest: 'static/js/engine.js'
                }
            },

            uglify: {
                options: {
                    banner: '/* Created by Yaroslav Zhoock | 2014 */\n'
                },
                js: {
                    files: {
                        'static/js/engine.min.js': '<%= concat.js.dest %>'
                    }
                }
            },


            watch: {
                css: {
                    files: [
                        'static/css/common/*.scss',
                        'static/css/blocks/**/*.scss'
                    ],
                    tasks: 'compass'
                },
                js: {
                    files: [
                        'static/js/parts/*.js',
                        'static/js/vendor/*.js'
                    ],
                    tasks: ['concat', 'uglify']
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['compass', 'concat', 'uglify']);

};