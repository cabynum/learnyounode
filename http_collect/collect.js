var http = require ('http')
var concat = require ('concat-stream')
var url = process.argv[2]

var concatStream = concat(gotResponse)

http.get(url, function(response) {
  response.setEncoding('utf8')
  response.pipe(concatStream)
})

function gotResponse(responseBuffer) {
  var res = responseBuffer.toString()
  var length = res.length
  console.log(length)
  console.log(responseBuffer)
}
