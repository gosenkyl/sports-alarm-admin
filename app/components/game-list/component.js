import Ember from 'ember';
import { task } from 'ember-concurrency';

let {
  Component,
  inject,
  computed
  } = Ember;

export default Component.extend({

  classNames: ["game-list"],

  store: inject.service("store"),

  team: null,

  games: computed.reads("team.gamesSorted")

});
