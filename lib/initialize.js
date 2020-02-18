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
      ProcessManager.add(Process.create(key, BaseProcess[key]))
    });
  }

  register(key , action) {
    ProcessManager.add(Process.create(key , action));
    return this;
  }

  start(serverMapping) {
    new Server(ProcessManager.list()).run(serverMapping);
  }

}

export default new ServerInitializer();