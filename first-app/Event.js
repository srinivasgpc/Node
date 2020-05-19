// How to work with event with node


const EventEmitter = require('events') //Class emitter
const logger =require('./logger')
const Logger = new logger();

Logger.on('messageLogged', (arg) => {
    console.log('listened called', arg)
});
Logger.log('message')