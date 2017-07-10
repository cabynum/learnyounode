var fs = require('fs')

fs.readFile(process.argv[2], function newlines(err, contents) {
  if(err) return console.error(err);
  var contentsAsString = contents.toString();
  console.log(contentsAsString.split('\n').length - 1);
});
