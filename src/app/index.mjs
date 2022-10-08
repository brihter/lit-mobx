import store from '../store/index.mjs'
import util from '../util/index.mjs'
import ui from '../ui/index.mjs'

const init = async () => {
  const items = new store.Store({
    items: []
  })

  await util.dom.create([
    new ui.ListPanel({
      title: 'list 1',
      store: items,
      storeItemTpl: (record) => record.title
    }),
    new ui.ListPanel({
      title: 'list 2',
      store: items,
      storeItemTpl: (record) => record.title
    })
  ])

  setInterval(() => {
    if (items.count > 10) return
    items.add({ title: Math.random() })
  }, 1000)
}

export default {
  init
}
