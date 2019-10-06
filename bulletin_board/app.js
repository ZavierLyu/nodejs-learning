var http = require('http')
var fs = require('fs')
// app application 应用程序
// 把当前模块所有的依赖项都声明再文件模块最上面
// 为了让目录结构保持统一清晰，所以我们约定，把所有的 HTML 文件都放到 views（视图） 目录中
// 我们为了方便的统一处理这些静态资源，所以我们约定把所有的静态资源都存放在 public 目录中
// 哪些资源能被用户访问，哪些资源不能被用户访问，我现在可以通过代码来进行非常灵活的控制
// / index.html
// /public 整个 public 目录中的资源都允许被访问
// 前后端融会贯通了，为所欲为

http
    .createServer(function (req, res) {
        var url = req.url
        if (url === '/') {
            fs.readFile('./views/index.html', function (err, data) {
                if (err) {
                    return res.end('404 not found')
                } 
                res.end(data)
            })
        } else if (url.indexOf('/public/') === 0) {
            // /public/css/main.css
            // /public/js/main.js
            // /public/lib/jquery.js
            // 统一处理：
            //    如果请求路径是以 /public/ 开头的，则我认为你要获取 public 中的某个资源
            //    所以我们就直接可以把请求路径当作文件路径来直接进行读取

            fs.readFile('.' + url, function (err, data) {
                if (err) {
                return res.end('404 Not Found.')
                }
                res.end(data)
            })
        }
    })
    .listen(3000, function() {
        console.log('Running at http://localhost:3000')
    })