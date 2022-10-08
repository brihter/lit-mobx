import { action, computed, makeObservable, observable } from 'mobx'

export class Store {
  items = []
  version = 0
  get count() {
    return this.items.length
  }

  constructor(cfg = {}) {
    makeObservable(this, {
      // properties
      items: observable,
      version: observable,
      count: computed,

      // methods
      add: action
    })

    this.items = cfg.items
  }

  add(record) {
    this.items.push(record)
    this.version++
  }
}
