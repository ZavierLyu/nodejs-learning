express = require('express')
fs = require('fs')

app = express()

app.engine('html', require('express-art-template'))

app.use('/public', express.static('./public/'))

app.get('/', (req, res) => {
    fs.readFile('./db.json', 'utf8', function(err, data) {
        if (err) {
            return res.status(500).send('Server Error')
        }
        var students = JSON.parse(data).students

        res.render('index.html', {
            fruits: [
                'Apple',
                'Peach',
                'Banana'
            ],
            students
        })
    })
})




app.listen(3000, function() {
    console.log('express app is running on http://127.0.0.1:3000')
})