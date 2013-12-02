module.exports = function(grunt, obj) {

  var path = require('path');

  var libName = obj.filename || obj.name;
  var fullLibName = obj.fullFilename || obj.name+'.full';

  require('load-grunt-config')(grunt, {
    configPath: path.join(__dirname, 'grunt'),
    config: {
      name: obj.name,
      info: grunt.file.readJSON('bower.json'),
      libName: libName,
      fullLibName: fullLibName
    }
  });

  if (obj.full === false) {
    grunt.registerTask('scripts', ['script-dist']);
  } else {
    grunt.registerTask('scripts', ['script-dist', 'script-full']);
  }

};