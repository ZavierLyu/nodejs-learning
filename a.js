// exports 模块对象


var reB = require('./b')

console.log(reB.foo)

var fs = require('fs')

fs.readFile('./a.js', function (err, data) {
    if (err) {
        console.log('failed to load files')
    } else {
        console.log(data.toString())
    }
})