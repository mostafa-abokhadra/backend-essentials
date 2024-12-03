### Crypto
```js
const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex');
console.log('Session Secret Key:', secretKey);
```
you can use the generated secret as your **SESSION_SECRET**