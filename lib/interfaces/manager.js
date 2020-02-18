export default class Manager {

  constructor(data = []) {
    this.data = data;
  }

  add(object) {
    this.data.push(object)
  }

  get(key) {
    return this.data.filter(object => obj[key]);
  }

  list() {
    return this.data;
  }
}