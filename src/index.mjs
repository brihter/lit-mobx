import ui from './ui/index.mjs'
import util from './util/index.mjs'
import app from './app/index.mjs'

if (window && !window.X) {
  window.X = {}
}

window.X.ui = ui
window.X.util = util
window.X.app = app
