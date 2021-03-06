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

  leagueId: null, // TODO Parent Model

  teams: null,

  teamsSort: ["teamName:asc"],
  sortedTeams: computed.sort("teams", "teamsSort")

});
