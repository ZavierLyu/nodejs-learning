## IP
===

1. ip地址用来定位计算机，端口号用来定位具体的程序，所有需要联网通信的应用程序都会站用一个端口号
2. Content Type 表 开源中国


### Module Export
Export function
```js
// Log.js
module.exports = function (msg) {
    console.log(msg)
}
```

```js
// app.js
msg = require('./Log.js');
msg('Hello');
```

Export function as a class:
``` js
// Person.js
module.exports = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () { 
        return this.firstName + ' ' + this.lastName;
    }
}
```

```js
// app.js
var person = require('./Person.js');
var person1 = new person('James', 'Bond');
console.log(person1.fullName());
```

### Static Service
```js
app.use(express.static('public'))
app.use('/static/', express.static('public'))
app.use('/public/', express.static('./public/'))
```

### Art-template
```js
app.engine('html', require('express-art-template'))

// 直接去views文件目录下寻找index.html
app.get('/', function (req, res) {
    res.render('index.html')
}) 
// 修改默认的 views 视图渲染存储目录
app.set('views', 目录路径)
```

### Body-parser
```js
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
```