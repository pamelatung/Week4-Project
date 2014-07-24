module.exports = function(grunt) {

 // Project configuration.
 grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
   sass: {
   	dist: {
   		files: {
   			'dist/style.css' : 'dev/style.css'
   		}
   	}
   },
   watch: {
   	css: {
   	  files: ['dev/*.scss'],
   	  tasks: ['sass', 'autoprefixer'],
   	  options: {
   	  livereload : true
   	}
   },
   jade: {
      files: ['dev/templates/*.jade'],
      tasks: ['jade'],
      options: {
         livereload: true
      }
   }
},
   autoprefixer: {
   	options: {
   		browsers: ['last 5 version', 'ie 7', 'ie 8', 'ie 9']
   	},
   	no_dest: {
   		src: 'dist/style.css'
   	}
   },
   connect: {
   	server: {
   		options: {
   			port: 9001,
   			base: 'dist/'
   		}
   	}
   },
   jade: {
      compile: {
         options: {
            client: false,
            pretty: true
         },
         files: [{
            cwd: 'dev/templates',
            src: '**/*.jade',
            dest: 'dist/',
            expand: true,
            ext: '.html'
         }]
      }
   }
 });

 grunt.loadNpmTasks('grunt-contrib-sass');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-autoprefixer');
 grunt.loadNpmTasks('grunt-contrib-connect');
 grunt.loadNpmTasks('grunt-contrib-jade');

 // Default task(s).
 grunt.registerTask('default', ['connect', 'sass', 'jade', 'watch']);
};

