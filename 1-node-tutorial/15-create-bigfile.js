const{writeFileSync} = require('fs')


for (let i = 0; i < 100000 ; i++){
    writeFileSync('./content/bigfile.txt','\nHello big file !!!!!!', {flag: 'a'})
}