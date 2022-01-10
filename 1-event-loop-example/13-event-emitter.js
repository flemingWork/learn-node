

const EventEmitter = require('events');

// instance of a class == object
const customEmitter = new EventEmitter()

// listen to an event called response
customEmitter.on('response', (name, age) => {
    console.log(`Data received user name ${name}, with age ${age}`);
})
customEmitter.on('response', () => {
    console.log(`Some other Logic`);
})

// emit and Event with the name response
customEmitter.emit('response', 'John', 32)
