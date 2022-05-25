var http = require('http')
var fs   = require('fs')

http.createServer(function (req, res) {
   /*  const text = fs.readFileSync('./contente/big.txt','utf-8')
    res.end(text) */
    const fileStream = fs.createReadStream('./contente/big.txt','utf8')
    fileStream.on('open',() => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
}).listen(5000)