import Ember from 'ember';

let {
  Component,
  computed
  } = Ember;

export default Component.extend({

  classNames: ["landing-page container"],

  leagues: null,

  leagueSort: ["sequence:asc"],
  sortedLeagues: computed.sort("leagues", "leagueSort")

});
