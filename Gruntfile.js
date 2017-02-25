module.exports = function(grunt){

  // Project configuration.
grunt.initConfig({

  concat: {
     app: {
       src: ['app/scripts/app.js'],
       dest: 'app/js/appbundle.js',
     },
     controller: {
       src: ['app/scripts/controllers.js'],
       dest: 'app/js/controllersbundle.js',
     },
     service: {
       src: ['app/scripts/services.js'],
       dest: 'app/js/servicesbundle.js',
     }
   },

  uglify: {
    options: {
     mangle: false
   },
  my_target: {
    
    files: [{
      'app/dist/app.min.js': ['app/js/appbundle.js']
    },{
      'app/dist/controller.min.js': ['app/js/controllersbundle.js']
    },{
      'app/dist/service.min.js': ['app/js/servicesbundle.js']
    }
  ]
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
    },
    controllerbundle: {
      src: 'app/dist/controller.min.js',
      dest : 'app/dist_min/'
    },
    servicebundle: {
      src: 'app/dist/service.min.js',
      dest : 'app/dist_min/'
    }
  }
});
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-filerev');

  grunt.registerTask('default',['concat','uglify','filerev']);

}
