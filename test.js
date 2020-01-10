// 依次从`a.txt`、`b.txt`、`c.txt`中读取文件
const fs = require('fs')
const aPromise = new Promise((resolve, reject) => {
    fs.readFile('a.txt', 'utf8', function(err, data){
        if (err) return reject(err)
        resolve(data)
    })
})

const bPromise = new Promise((resolve, reject) => {
    fs.readFile('b.txt', 'utf8', function(err, data){
        if (err) return reject(err)
        resolve(data)
    })
})

const cPromise = new Promise((resolve, reject) => {
    fs.readFile('c.txt', 'utf8', function(err, data){
        if (err) return reject(err)
        resolve(data)
    })
})

let content = ''
aPromise
    .then(aContent => {
        content += aContent
        console.log(`a: ${content}`)
        return bPromise
    })
    .then(bContent => {
        content += bContent
        console.log(`b: ${content}`)
        return cPromise
    })
    .then(cContent => {
        console.log(content + cContent)
    })