// import express from 'express';
import Server from './lib';

// const initializer = require('./dist');
// import ServerInitializer from './lib';

// const App = express();


Server.register('TEST', async ({ context }, next) => {

  console.log('TEST', context.values());

  next();
});

export default  {
  Server,
  App: {}
}