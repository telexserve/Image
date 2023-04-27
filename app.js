var image = require('node-html-to-image')
var fs = require('fs')


fs.readFile('index.html','utf-8',function(err,data) {
    image({output:'tank.png',html:`'${data}'`})
})


puppetter.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']})
