# lit-mobx

This repository explores the possibility of sharing state between web components without the need for property drilling/event bubbling. Instead, constructor injection is used as an alternative.

[Demo](https://brihter.github.io/lit-mobx/)

## Example

Create the store.

```js
const items = new store.Store({
  items: []
})
```

Inject the store.

```js
await util.dom.create([
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
