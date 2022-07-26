
const sayHi = require('./5-utils')
const names = require('./4-names')
const data = require('./6-alternative-module-export.js')

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)
sayHi(data.items)