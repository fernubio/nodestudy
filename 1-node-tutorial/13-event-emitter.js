const EventEmitter = require('events')

//console.log(EventEmitter)

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data recieved from user:${name} with id:${id}`)
})

customEmitter.on('response', (color, pain) => {
    console.log(`some other logic here with color: ${color} and pain:${pain}`)
})

customEmitter.emit('response', 'john', 34)