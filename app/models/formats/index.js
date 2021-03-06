//
// load all the formats
//
//

var formats = {}
var path = require('path');
var folder = __dirname + "/"
//"./app/models/formats/"
require("fs").readdirSync(folder).forEach(function(file) {
  if (path.extname(file) === '.js' && file !== 'index.js' && file !== 'ogr.js' && file !== 'pg.js' ) {
    var format = require(folder + file);
    formats[format.prototype.id] = format;
  }
});

module.exports = formats;
