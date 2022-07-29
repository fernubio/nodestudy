const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    // const text = fs.readFileSync('./content/bigfile.txt')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/bigfile.txt','utf-8')
    fileStream.on('open', () => {
        // stream the file
        fileStream.pipe(res)
    })

    fileStream.on('error', () => {
        
    })
}).listen(5000)