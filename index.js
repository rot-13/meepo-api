const server = require('./server')

server.listen(process.env.PORT || 8000, function() {
  console.log('%s listening at %s', server.name, server.url)
})
