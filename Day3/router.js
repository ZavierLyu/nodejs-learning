var express = require('express')

var app = express()

app.get('/', function (req, res) {

    res.send(`
        <!DOC
    `)
})

app.listen(3000, function(){
    console.log('express app is running on http://127.0.0.1:3000')
})

