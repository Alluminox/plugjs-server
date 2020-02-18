import express from 'express';
import { Initializer as Server } from './lib';

// const initializer = require('./dist');
// import ServerInitializer from './lib';

const App = express();

ServerInitializer.register('TEST', async ({ context }, next) => {

  console.log('TEST', context.values());

  next();
});

export default  {
  Server: ServerInitializer,
  App
}