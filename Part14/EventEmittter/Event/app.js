// Import EventEmitter class
const EventEmitter = require("events");


// Create an instance of EventEmitter
const emitter = new EventEmitter();

//1. Define an event listener (addListenet)
emitter.on("greet", () => {
  console.log("Rajendra chaudhary");
})
//2. Trigger (emit) the "greet" event
emitter.emit("greet");

