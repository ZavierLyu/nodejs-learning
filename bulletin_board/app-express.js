var express = require('express')
var bodyParser = require('body-parser')

var app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

var comments = [
    {
      name: '张三',
      message: '今天天气不错！',
      dateTime: '2015-10-16'
    },
    {
      name: '张三2',
      message: '今天天气不错！',
      dateTime: '2015-10-16'
    },
    {
      name: '张三3',
      message: '今天天气不错！',
      dateTime: '2015-10-16'
    },
    {
      name: '张三4',
      message: '今天天气不错！',
      dateTime: '2015-10-16'
    },
    {
      name: '张三5',
      message: '今天天气不错！',
      dateTime: '2015-10-16'
    }
  ]

// art-tempalte
// res.send() 第一个参数不能谢路径，默认会去项目中的views目录查找该模版文件
// express 约定：开发人员所有的视图文件都放在views目录中
app.engine('html', require('express-art-template'))

app.get('/', function (req, res) {
    res.render('index.html', {
        comments: comments
    })
})

app.get('/admin', (req, res) => {
    res.render('admin/admin.html')
})

app.post('/post', (req, res) => {
    // req.query 只能拿get的请求数据
    console.log(req.body)
    var comment = req.body
    comment.dateTime = '2017-11-2 17:11:22'
    comments.unshift(comment)
    res.render('index.html', {
        comments: comments
    })
})

app.get('/post', function (req, res) {
    res.render('post.html')
})

// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, '*', 2))
//     // console.log(JSON.stringify(req.body, null, 2))
// })

app.use('/public', express.static('./public/'))

app.listen(3000, function(){
    console.log('express app is running on http://127.0.0.1:3000')
})

