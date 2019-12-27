export class GlobalEventDistributor {
  constructor() {
    this.stores = [];
  }

  registerStore(store) {
    this.stores.push(store);
  }

  dispatch(event) {
    console.log(event)
    this.stores.forEach(s => s.dispatch(s.commit? event.type.toLowerCase(): event));
  }
}
