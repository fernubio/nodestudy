const http = require ('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page')
    } else if(req.url === '/about'){
        res.end('This is us here')
    } else {
        res.end(`<p>We can't seem to find the page you are loking for</p><a href="/">Back home</a>`)
    }
    
    //
  //    <p>We can't seem to find the page you are loking for</p><a href="/">Back home</a>
})

server.listen(5000)