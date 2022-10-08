# lit-mobx

This repository explores the possibility of sharing state between web components without the need for property drilling/event bubbling. Instead, constructor injection is used as an alternative.

[Demo](https://brihter.github.io/lit-mobx/)

## Example

Create the store.

```js
import store from '../store/index.mjs'
// ...

const items = new store.Store({
  items: []
})
```

Inject the store.

```js
import util from '../util/index.mjs'
import ui from '../ui/index.mjs'
// ...

util.dom.create([
  new ui.ListPanel({
    title: 'List #1',
    store: items,
    storeItemTpl: (record) => record.title
  }),
  new ui.ListPanel({
    title: 'List #2',
    store: items,
    storeItemTpl: (record) => record.title
  })
])
```
