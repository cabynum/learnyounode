var http = require('http')
var url = require('url')

var port = process.argv[2]

var server = http.createServer(function (request,response) {
  if (request.method !== 'GET') {
      return response.end('send me a GET\n')
  }

  var urlProps = url.parse(request.url, true)
  var path = urlProps.pathname
  var query = urlProps.query
  var date, obj, responseJSON

  if (path === '/api/parsetime'){
    date = new Date(query.iso)
    obj = { "hour": date.getHours(), "minute": date.getMinutes(), "second": date.getSeconds()}
    responseJSON = JSON.stringify(obj)
    response.writeHead(200, { 'Content-Type': 'application/json' })
    return response.end(responseJSON)
  }

  if (path === '/api/unixtime') {
    date = new Date(query.iso)
    obj = { "unixtime": date.getTime()}
    responseJSON = JSON.stringify(obj)
    response.writeHead(200, { 'Content-Type': 'application/json' })
    return response.end(responseJSON)
  }

  return response.end('Invalid API endpoint\n')

})

server.listen(port)
