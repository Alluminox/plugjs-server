import express from 'express';
import { Initializer as Server } from './lib';

const App = express();

Server.register('TEST', async ({ context }, next) => {

  console.log('TEST', context.values());

  next();
});

export default  {
  Server,
  App
}