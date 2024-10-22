### Events
- the envents module allows us to work with events in node.js
- an <mark>event</mark> is an action or an occurrence that has happened in our application that we can respond to
- using the events module, we can dispatch our own custom events and respond to those custom events in a non-blocking manner
```js
const Event = require("node:events")
const emitter = new Event()
```
> [!NOTE]
> when you require events module, the returned value is the <mark>EventEmitter</mark> class
### emitting an event
- use <mark>emit<mark> method
- emit method accept <mark>eventName<mark> as an argument
```js
emitter.emit("order-pizza")
```
### add listener
- to respond to an event we need to register a <mark>listener</mark>
- a listner is a call back function that get executed when corrosponding event is emitted
- for that we use the <mark>on</mark> method that accept <mark> eventName and listner </mark>

```js
emtter.on("order-pizza", () => {
    console.log("orderRecieved! backing a pizza");
})
```
- now when you run <mark>node index</mark> you will get in the console `orderRecieved! backing a pizza`
- if you want to pass arguments to the listener you can pass it with emit method
```js
emitter.emit("eventName", "arg1", "arg2")
```
and in your listener accept the 2 arguments
```js
emitter.on("eventName", (arg1, arg2) => {})
```
you can specify multiple listener to an event
```js
function differentListener(size){}
emtiter.on("order-pizza", differentListener);
```
> [!NOTE]
> - we are not blocking execution by writing code in this manner
> - events allows us to wirte the code in a non-blocking manner
> - if you add a console statement for example after the event listener it will get executed before event occurs in the system
