import Ember from 'ember';
import { task } from 'ember-concurrency';

let {
  Component,
  inject,
  get,
  set,
  A:emberA
  } = Ember;

export default Component.extend({

  store: inject.service("store"),

  team: null,

  schedule: null,

  didReceiveAttrs(){
    this._super(...arguments);

    get(this, "getSchedule").perform();
  },

  getSchedule: task(function * (){

    set(this, "schedule", emberA());
  })

});
