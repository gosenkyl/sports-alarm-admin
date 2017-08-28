import DS from 'ember-data';
import GameMixin from './mixin';

export default DS.Model.extend(GameMixin, {

  identifier: DS.attr(),
  dateTime: DS.attr(),
  homeTeam: DS.belongsTo("team", { inverse: "homeGames"} ),
  awayTeam: DS.belongsTo("team", { inverse: "awayGames"} )

});
