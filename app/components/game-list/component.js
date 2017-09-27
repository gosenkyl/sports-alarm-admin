import Ember from 'ember';
import { task } from 'ember-concurrency';
import moment from 'moment';

let {
  Component,
  inject,
  computed,
  get
  } = Ember;

export default Component.extend({

  classNames: ["game-list"],

  store: inject.service("store"),

  team: null,
  games: computed.reads("team.gamesSorted"),

  didInsertElement(){

    Ember.run.later(() => {
      Ember.$('html, body').animate({
        scrollTop: this.$(".next-game").offset().top - 100
      });
    }, 500);
  },

  now: computed({
    get(){
      return moment();
    }
  }),

  nextGame: computed("games.[]", function(){
    return get(this, "games").find(game => {
        return moment(get(game, "dateTime")).isAfter(moment());
    });
  })

});
