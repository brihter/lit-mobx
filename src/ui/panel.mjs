import { LitElement, html, css } from 'lit'
import { autorun } from 'mobx'

export class Panel extends LitElement {
  static styles = css`
    div { border: 1px solid #ccc; padding: 10px; margin: 10px; }
    h1 {font-size:1em;}
  `

  static properties = {
    title: { type: String },
    count: { type: Number }
  }

  constructor(cfg = {}) {
    super()

    this._state = cfg.state
    this.title = cfg.title || 'My Panel'

    // quick hack
    autorun(() => this.count = this._state.count)
  }

  render() {
    return html`
      <div>
        <h1>${this.title}</h1>
        <hr />
        Count is ${this.count}
        <slot></slot>
      </div>
    `
  }
}

customElements.define('x-panel', Panel)
