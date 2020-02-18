export default {
  
  create: () => {

    return {
      data: {},

      add(key , value) {
        this.data = Object.assign({}, this.data, { [key]: value })
      },

      get(key) {
        return this.data[key] || {};
      },

      destroy() {
        this.data = {};
      },

      values() {
        return Object.assign({}, this.data);
      }
    }
  },


}