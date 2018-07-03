import Ember from 'ember';
import { task } from 'ember-concurrency';
import moment from 'moment';

let {
  Component,
  inject,
  computed,
  get,
  run,
  $:ember$,
  isPresent
  } = Ember;

export default Component.extend({

  classNames: ["game-list"],

  store: inject.service("store"),

  team: null,
  games: computed.reads("team.gamesSorted"),

  didInsertElement(){
    let nextGame = this.$(".next-game");
    let scrollTo = isPresent(nextGame) ? nextGame.offset().top - 100 : this.$(".game:last").offset().top;

    run.later(() => {
      ember$('html, body').animate({
        scrollTop: scrollTo
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
