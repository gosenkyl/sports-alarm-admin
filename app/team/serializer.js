import SportsAlarm from '../sports-alarm/serializer';

export default SportsAlarm.extend({

  attrs: {
    league: { key: "leagueId", serialize: "ids", deserialize: "records"},
    homeGames: {serialize: false, deserialize: 'records'},
    awayGames: {serialize: false, deserialize: 'records'}
  }

});
