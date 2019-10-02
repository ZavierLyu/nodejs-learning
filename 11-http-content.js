var http = require('http')
var fs = require('fs')
var server = http.createServer()

server.on('request', function (req, res) {
    var url = req.url

    if (url === "/") {
        fs.readFile("./resource/index.html", function(error, data) {
            if (error) {
                res.end("Nothing here")
            } else {
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.end(data)
            }
        })
    } else if (url === "/aoko.jpg") {
        fs.readFile("./resource/aoko.jpg", function(error, data) {
            if (error) {
                res.end("Nothing here")
            } else {
                res.setHeader('Content-Type', 'image/jpeg')
                res.end(data)
            }
        })
    }
    // } else if (url === "/video") {
    //     fs.readFile("./resource/video.mp4", function(error, data) {
    //         if (error) {
    //             res.end('Nothing here')
    //         } else {
    //             res.setHeader('Content-Type', 'video/mpeg4')
    //             res.end(data)
    //         }
    //     })
    // }
})


server.listen(3000, function () {
    console.log('服务器启动成功，可以通过 http://127.0.0.1:3000/ 来进行访问')
})