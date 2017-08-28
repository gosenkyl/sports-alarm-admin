import Ember from 'ember';
import DS from 'ember-data';
import TeamMixin from './mixin';

let {
  computed
  } = Ember;

export default DS.Model.extend(TeamMixin, {

  identifier: DS.attr(),

  league: DS.belongsTo("league"),

  city: DS.attr(),
  mascot: DS.attr(),

  originCity: DS.attr(),
  originMascot: DS.attr(),

  primaryColor: DS.attr(),
  secondaryColor: DS.attr(),

  isNew: DS.attr(),

  image: DS.attr(),

  homeGames: DS.hasMany("game", {inverse: "homeTeam", async: true}),
  awayGames: DS.hasMany("game", {inverse: "awayTeam", async: true}),

  games: computed.union("homeGames", "awayGames")

});
