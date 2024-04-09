# The Node.js Event emitter

  - If you worked with JavaScript in the browser, you know how much of the interaction of the user is handled through events: mouse clicks, keyboard button presses, reacting to mouse movements, and so on.

  - On the backend side, Node.js offers us the option to build a similar system using the events module.

  - This module, in particular, offers the EventEmitter class, which we'll use to handle our events.

```javascript
const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();
```
This object exposes, among many others, the on and emit methods.

 - ```emit``` is used to trigger an event

 - ```on```  is used to add a callback function that's going to be executed when the event is triggered
 
 - ```on``` & ```emit```
```javascript
eventEmitter.on('start', () => {
  console.log('started');
});

eventEmitter.emit('start');
```

- The event handler function is triggered, and we get the console log.

- We can pass arguments to the event handler by passing them as additional arguments to emit():
 

*For Single Argument*

```javascript
eventEmitter.on('start', number => {
  console.log(`started ${number}`);
});
eventEmitter.emit('start', 23);
```

*For Multiple arguments*

```javascript
eventEmitter.on('start', (start, end) => {
  console.log(`started from ${start} to ${end}`);
});
eventEmitter.emit('start', 1, 100);
```

- The EventEmitter object also exposes several other methods to interact with events, like

- ```once()```: add a one-time listener
- ```removeListener() / off()```: remove an event listener from an event
- ```removeAllListeners():``` remove all listeners for an event