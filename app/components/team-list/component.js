import Ember from 'ember';
import { task } from 'ember-concurrency';

let {
  Component,
  inject,
  get,
  set,
  computed
  } = Ember;

export default Component.extend({

  classNames: ["team-list container"],

  store: inject.service("store"),

  leagueId: null,

  didReceiveAttrs(){
    this._super(...arguments);

    get(this, "findTeams").perform();
  },

  teams: null,

  teamsSort: ["teamName:asc"],
  sortedTeams: computed.sort("teams", "teamsSort"),

  findTeams: task(function * (){
    let teams = yield get(this, "store").query("team", {leagueId: get(this, "leagueId")});
    set(this, "teams", teams);
    return teams;
  })

});
