var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function getFiles(err, files) {
  if(err) console.error(err)
  var inputExt = process.argv[3].toString()
  files.forEach(function(value){
    if(path.extname(value).replace('.','') === inputExt) console.log(value)
  })
})
