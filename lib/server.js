import http from 'http';
import uuid from 'uuid';

import ServerPipeline from './pipeline/server-pipeline';
import Context from './context';

class Server {

  constructor(processList) {
    this.context = Context.create();
    this.pipeline = new ServerPipeline(processList, { context: this.context })
  }

  resolveServerConfig () {
    
    const { server } = this.context.get('config');
    let data = {};

    if (server) data = { ...server }
    
    if (!data.name) data.name = process.env.NAME || uuid().substr(0, 5);
    if (!data.port) data.port = process.env.PORT || 3333;
    if (!data.host) data.host = process.env.HOST || '127.0.0.1';
    
    return data;
  }

  startServer(serverMapping) {
    const { name, port, host } = this.resolveServerConfig();
    const server = http.createServer(serverMapping);

    server.listen(port, host);
    server.on('listening', () => console.log(`Server instance ${name} is running on ${host}:${port}`));
    server.on('error',(err) => console.log("Internal server error log -> ", err))
    server.on('close', () => {
      console.log(`Server has been closed at ${new Date()}`)
      process.exit(0);
    });
  }

  run(serverMapping) {
    this.pipeline.dispatch(() => this.startServer(serverMapping));

    
  }

}


export default Server;