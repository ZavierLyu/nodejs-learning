var foo = 'Hello World'

console.log(foo)

// fs file-system
// 进行文件操作的核心模块
// 映入fs这个核心模块，得到所有的文件操作相关的API
// 1.使用require方法加载fs核心模块
var fs = require('fs')

// 2. 读取文件
// 第一个参数就是尧都区的文件路径
// 第二个参数是一个回调函数
//      error：如果读取失败，error激素hi错误对象；如果读取成功，error就是null
//      data：如果读取失败，data就是undefined；如果读取成功，data就是读到的数据
fs.readFile('d.txt', function(error, data) {
    // console.log(data)
    // console.log(error)
    if (error) {
        console.log('读取文件失败')
    } else {
        console.log(data.toString())
    }
    // console.log(data.toString())
})  

// 3. 写文件
//  第一个参数：文件路径
//  第二个参数：文件内容
//..第三个参数：回调函数
//      error:成功，写入成功，error=null；失败，写入失败，error=错误对象
fs.writeFile('./o.md', '给大家拜年了', function(error) {
    if (error) {
        console.log("写入失败")
    } else {
        console.log("写入成功")
    }
})