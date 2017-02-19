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
  filerev: {
    options: {
      algorithm: 'md5',
      length: 8
    },
    appbundle: {
      src: 'app/dist/app.min.js',
      dest : 'app/dist_min/'
    }
  }
});
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-filerev');

  grunt.registerTask('default',['concat','uglify','filerev']);

}
