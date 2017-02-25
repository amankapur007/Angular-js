module.exports = function(grunt){

  // Project configuration.
grunt.initConfig({

  useminPrepare: {
    html: 'app/index.html',
    options: {
      dest: 'build',
    }
  },
  usemin: {
    html: ['build/index.html'],
  },

copy: {
  main: {
    files: [
      {src: ['app/index.html'], dest: 'build/index.html'},

      // includes files within path
      {expand: true, cwd:'app/views', src: ['**/*.html'], dest: 'build/views/'},

      // includes files within path and its sub-directories
      {expand: true, cwd:'app/images', src: ['**/*.png'], dest: 'build/images/'},

      // makes all src relative to cwd
      {expand: true, cwd:'app/fonts', src: ['**/*'], dest: 'build/fonts/'},

    ],
  },
}

});
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.registerTask('build', [
    'copy:main',
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'usemin'
  ]);
}
