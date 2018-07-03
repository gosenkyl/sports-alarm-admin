import Ember from 'ember';

let {
  Route,
  inject,
  get
  } = Ember;

export default Route.extend({

  store: inject.service("store"),

  model(){
    return get(this, "store").findAll("league");
  }
});
