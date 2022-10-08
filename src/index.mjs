import * as ui from './ui/index.mjs'
import * as util from './util/index.mjs'
import * as app from './app/index.mjs'

if (window && !window.X) {
  window.X = {}
}

window.X.ui = ui
window.X.util = util
window.X.app = app
