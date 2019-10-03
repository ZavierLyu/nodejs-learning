var http = require('http')
var fs = require('fs')
var server = http.createServer()

var wwwDir = '/Users/zavierlyu/LocalCodes/GitHub/nodejs-learning/Day2/www'

server.on('request', function(req, res) {
    var url = req.url

    var filePath = '/index.html'

    if (url !== '/') {
        filePath = url
    }

    fs.readFile(wwwDir + filePath, function(error, data) {
        if (error) {
            return res.end('404 not found.')
        } else {
            return res.end(data)
        }
    })

})

server.listen(3000, function () {
    console.log('Server start: http://127.0.0.1:3000/ ')
})