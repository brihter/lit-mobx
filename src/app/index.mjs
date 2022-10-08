import * as util from '../util/index.mjs'
import * as ui from '../ui/index.mjs'

import { State } from './state.mjs'

const init = () => {
  const appState = new State()

  util.create([
    new ui.Panel({ title: 'Panel 1', state: appState }),
    new ui.Panel({ title: 'Panel 2', state: appState }),
    new ui.Panel({ title: 'Panel 3', state: appState })
  ])
}

export {
  init
}
