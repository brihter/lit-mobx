import { LitElement } from 'lit'

const isInstance = (obj) => obj instanceof LitElement

const createOne = async (cfg = {}) => {
  let component = cfg
  if (!isInstance(cfg)) {
    const ctor = customElements.get(cfg.type)
    if (!ctor) {
      return console.warn(`Error: Component type ${cfg.type} doesn't exist.`)
    }

    component = new ctor(cfg)
  }

  let renderTo = document.body
  if (cfg.renderTo) {
    renderTo = cfg.renderTo
  }

  renderTo.appendChild(component)
}

const create = async (cfg) => {
  if (!(cfg instanceof Array)) {
    cfg = [cfg]
  }

  const tasks = cfg.map(createOne)
  await Promise.all(tasks)
}

export default {
  create
}
