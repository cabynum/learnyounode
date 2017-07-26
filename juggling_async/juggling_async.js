var http = require ('http')
var concat = require ('concat-stream')
var count = 2

function readUrl(count) {
  http.get(process.argv[count], function(response) {
    response.setEncoding('utf8')
    response.pipe(concat(function(data){
      console.log(data.toString())
      if(count === 4) return
      readUrl(count + 1)
    }))
  })
}

readUrl(count)
