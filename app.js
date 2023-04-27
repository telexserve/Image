var image = require('node-html-to-image')
var fs = require('fs')
const { default: puppeteer } = require('puppeteer')


fs.readFile('index.html','utf-8',function(err,data) {
    image({output:'tank.png',html:`'${data}'`})
})


puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']})
