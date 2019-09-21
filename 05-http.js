// 构建web服务器
// 核心模块： http
// http 这个模块就是帮你创建编写服务器的

// 1. 加载http核心模块
var http = require('http')

// 2. 使用http.createServer() 方法创建一个web服务器
var server = http.createServer()

// 服务器干嘛
//  提供对数据的服务
//        发请求
//          接受请求
//          处理请求
//          给个反馈（发送响应）
//      注册request请求时间
//          当客户端请求过来，就会自动出发服务器的requeest请求时间，然后执行低二哥参数；回调处理
//      response 相应对象
//          相应对象可以用来个客户端发送相应星系
//      request 请求对象
//          请求对象课以用来获取客户端的一些请求信息，例如请求路径

server.on('request', function(request, response) {


    console.log('收到客户端请求了，请求路径是：' + request.url)
    // response 对象又一个方法： write可以以用来给客户端发送响应数据
    // write可以使用多次，但最后一次一定要使用end来结束响应
    var url = request.url
    if (request.url === "/login") {
        response.write("login ")
        response.end
    }
    response.end(JSON.stringify(10086))
})

// 4. 绑定端口号，启动服务器
server.listen(3000, function() {
    console.log('服务器启动成功，可以通过 http://127.0.0.1:3000/ 来进行访问')
})