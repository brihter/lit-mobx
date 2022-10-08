import { LitElement } from 'lit'

const createOne = async (cfg = {}) => {
  let component
  if (!(cfg instanceof LitElement)) {
    const Component = customElements.get(cfg.type)
    if (!Component) {
      return console.warn(`Error: Component type ${cfg.type} doesn't exist.`)
    }
  
    component = new Component(cfg)
  } else {
    component = cfg
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

export {
  create
}
