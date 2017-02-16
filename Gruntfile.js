module.exports = function(grunt){

  // Project configuration.
grunt.initConfig({
  concat: {
    js: {
      src: ['app/scripts/1.js', 'app/scripts/2.js'],
      dest: 'dist/scripts/build.js',
    },
    css:{
      src: ['app/styles/1.css', 'app/styles/2.css'],
      dest: 'dist/styles/build.css',
    }
  },
});
  grunt.loadNpmTasks('grunt-contrib-concat');


}
