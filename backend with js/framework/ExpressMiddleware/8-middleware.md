### writing middleware
- Express is a routing and middleware web framework
- An Express application is essentially a series of middleware function calls.
- Middleware functions are functions that have access to the <mark>request object</mark> (req), the <mark>response object</mark> (res), and the <mark>next</mark> function in the application’s request-response cycle
- The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware

**Middleware functions can perform the following tasks**:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging

middleware functions that return a Promise will call next(value) when they reject or throw an error. next will be called with either the rejected value or the thrown Error


### NOTES
- middleware is simply a function that get executed whenever a route get a request, it should call </mark>next()</mark>
- you use this middleware by specifying <mark>app.use(middlewareName)</mark> before the route you want the middleware to be executed before it
- if you write app.use(middleware) after the route it will never get executed as the route itself will end the req-res cycle

### example
```js
const express = require('express')
const app = express()

const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
})

app.listen(3000)
```
**An Express application can use the following types of middleware:**
- Application-level middleware
- Router-level middleware
- Error-handling middleware
- Built-in middleware
- Third-party middleware

### built-in middlewares
```js
app.use(express.urlencoded({extended: true}))
```
read [this](https://expressjs.com/en/guide/writing-middleware.html)