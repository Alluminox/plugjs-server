# Create an simple server, loading enviroment variables and process

> **OBS** This library is in the beginning and it is very basic

## How to use this lib, is very simple!

### First config **plug.json** on root project directory
``` 
{
  "server": {
    "name": "<Your AppName>", // default gen uuid
    "port": 3333,
    "host": "127.0.0.1" // or your host Ip!
  }
}
```

### Now Initialize your server
```python

// My Favorite node.js framework from manage requests!
import express from 'express';

// ES6 Modules!
import Server from 'plugjs-server';

// CommonJS
const { start, register } = require('plugjs-server').default;

// Up Server
Initializer.Server.start(app);

```

### Managing the context

```python

// My Favorite node.js framework from manage requests!
import express from 'express';

// ES6 Modules!
import Server from 'plugjs-server';

// CommonJS
const { start, register } = require('plugjs-server').default;

const app = express();
app.use(express.json({ limit: '10mb' }))

app.use('my-api', (req, res, next) => {
  res.json({ 
    api: 'ok', version: '1.0.0' 
    })
});

const { Server, register } = ServerInitializer;

register('MY_ACTION_1', (data, next) => {

  // ...MANIPULATE YOUR SERVER CONTEXT HERE
  data.context.add('action1', { config: {} })

  next();
});

register('MY_ACTION_2', ({context}, next) => {

  // ...MANIPULATE YOUR SERVER CONTEXT HERE
  console.log(context.get('action1'));

  context.add('action2', { config: {} })

  next();
});


// Up Server!
Server.start(app);

```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License
[ISC](https://choosealicense.com/licenses/isc/)