import Process from './process';
import ProcessManager from './manager/process-manager';
import BaseProcess from './base-process';

import Server from './server';

class ServerInitializer {

  constructor() {
    this.process = ProcessManager;
    this.init();
  }

  init() {
    Object.keys(BaseProcess).forEach(key => {
      this.process.add(Process.create(key, BaseProcess[key]))
    });
  }

  register(key , action) {
    this.process.add(Process.create(key , action));
    return this;
  }

  start(serverMapping) {
    new Server(this.process.list()).run(serverMapping);
  }

}

export default new ServerInitializer();