const events = require('events');
const eventEmitter = new events.EventEmitter();
/*
eventEmitter.on('selamla',(object)=>{ //parantez içine neden isim yazıyor
    console.log(`salam node selam ${object.name} ${object.surname}`);
})
const isim ="mehmet";
eventEmitter.emit('selamla', {name:'murat',surname:'kılıç'})
*/
eventEmitter.once('SayHello',()=>{
    console.log('merhabaaaa')
})
eventEmitter.emit('SayHello')