var express = require('express')

var app = express()

// art-tempalte
// res.send() 第一个参数不能谢路径，默认会去项目中的views目录查找该模版文件
// express 约定：开发人员所有的视图文件都放在views目录中
app.engine('html', require('express-art-template'))

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/post', function (req, res) {
    res.send('post page')
})

app.use('/public', express.static('./public/'))

app.listen(3000, function(){
    console.log('express app is running on http://127.0.0.1:3000')
})

