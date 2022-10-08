import { action, makeObservable, observable } from 'mobx'

export class State {
  count = 0

  constructor() {
    makeObservable(this, {
      count: observable,
      increment: action
    })

    setInterval(this.increment.bind(this), 1000)
  }

  increment() {
    this.count++
  }
}
