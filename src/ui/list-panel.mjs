import { LitElement, html, css } from 'lit'
import { autorun } from 'mobx'

export class ListPanel extends LitElement {
  static styles = css`
    div { padding: 1em; margin: 0; }
    div h1 {margin: 0;}
    div ul {margin-bottom:0;}
  `

  static properties = {
    version: { type: Number },
    title: { type: String }
  }

  constructor(cfg = {}) {
    super()

    this._cfg = cfg
    this.version = 0

    this.title = cfg.title || 'my list panel'
    this.store = cfg.store

    if (this.store) {
      autorun(() => this.version = this.store.version)
    }
  }

  render() {
    return html`
      <div>
        <h1>${this.title}</h1>
        <hr />
        <ul>
          ${this.store.items.map((item) =>
            html`<li>${this._cfg.storeItemTpl(item)}</li>`
          )}
        </ul>
      </div>
    `
  }
}

customElements.define('x-panel', ListPanel)
