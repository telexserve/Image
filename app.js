var image = require('node-html-to-image')
var fs = require('fs')


fs.readFile('index.html','utf-8',function(err,data) {
    image({output:'tank.png',html:`'${data}'`})
})


puppeteer.launch({headless: true, args:['--no-sandbox']});
