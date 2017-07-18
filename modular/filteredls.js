var fs = require('fs')
var path = require('path')

module.exports = function (dirname, extension, callback) {
  var data = []
  fs.readdir(dirname, function getFiles(err, files) {
    if(err) return callback(err)
    files.forEach(function(value){
      if(path.extname(value).replace('.','') === extension) data.push(value)
    })
    callback(null, data);
  })
}

function callback(err, data) {
  if(err) console.error(err)
  return data
}
