class ProcessCreator {
  
  constructor() {
    this.isCreated = false;

    this.action;
    this.id;
  }

  setId(id) {
    this.id = id;
  }

  setAction(action) {
    this.action = action;
  }

  data() {
    this.isCreated = true;

    return {
      id: this.id,
      action: this.action,
      created: this.isCreated,
      createdAt: Date.now()
    }
  }
}

class Process {
  constructor() {

    this.process;
  }

  create(id, action) {
    this.process =  new ProcessCreator();
    this.process.setId(id);
    this.process.setAction(action);

    return this.process.data();
  }
}

export default new Process();