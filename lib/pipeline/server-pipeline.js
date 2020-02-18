class ServerPipeline {

  constructor(processList = [], data = {}) {
    this.endPipeline = false;
    
    data.end = () => {
      this.endPipeline = true;
    }
    
    this.data = data;
    this.processList = processList;
  }


  dispatch(callback) {
    let iterator = 0;

    const next = () => {
      iterator++;

      if (!this.endPipeline && iterator < this.processList.length) {
        const nextProcess = this.processList[iterator].action;

        if (nextProcess) nextProcess(this.data, next)

      } else {
        this.data.end(); 
      }
    }


    if (iterator < this.processList.length) {
      const firstMiddleware = this.processList[iterator].action;
      firstMiddleware(this.data, next)
    }


    if (this.endPipeline) { callback(); }

  }

}

export default ServerPipeline;