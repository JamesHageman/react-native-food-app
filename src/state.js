import { observable, extendObservable, transaction } from 'mobx';

export function createState() {
  const state = observable({
    fridges: [
      createFridge('Home'),
      createFridge('Office')
    ],
    addFridgeActive: false,
    newFridge: createFridge('')
  })

  return state
}

export function createFridge(name = '') {
  return {
    name: name,
    items: []
  };
}

export function addFridge(state, fridge) {
  transaction(() => {
    extendObservable(state, {
      newFridge: createFridge('')
    });
    state.fridges.unshift(fridge);
  })
}
