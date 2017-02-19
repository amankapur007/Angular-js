module.exports = function(grunt){

  // Project configuration.
grunt.initConfig({

  concat: {
     dist: {
       src: ['app/scripts/app.js'],
       dest: 'app/js/appbundle.js',
     }
   },

  uglify: {
  my_target: {
    files: {
      'app/dist/app.min.js': ['app/js/appbundle.js']
    }
  }
  },
});
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default',['concat','uglify']);

}
