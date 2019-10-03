# Node.js day 1

## 总结

- node.js 
    - 既不是语言也不是框架，是一个平台
    - js运行时

- 创建服务
``` js
    var server = http.createServer()
    server.listen(3000, function () { /* 监听端口 */
    console.log('服务器启动成功，可以通过 http://127.0.0.1:3000/ 来进行访问')
})
```

- 模块系统
    - 在 node 中没有全局作用域的概念
    - 在 node 中，只能通过require方法来加载执行多个js文件
    - 模块作用域之间不回污染：
        - 模块完全是芬必得
        - 外部无法访问内部
        - 内部也无法访问外部
    - 避免命名冲突
    - 模块通信：`exports`手动挂在到接口对象中，`require`模块可以调用其exports

- 核心模块
    - 由node提供具名的模块
    - fs:
        ```js
        var fs = require('fs')
        fs.readFile("./resource/index.html", function(error, data) {
            if (error) {
                res.end("Nothing here")
            } else {
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.end(data)
            }
        }
        ```
    - server:
        ```js
        var http = require('http')
        var server = http.createServer()
        server.on('request', function (req, res) {...}
        ```
    - http:
        - require
        - 端口号
        - Content-Type

*反引号支持换行*

分号问题：
    - 无分号风格代码：
        当一行代码是以 (), [], `` 开通是，则在前面不上一个分号以避免一些语法解析错误
        