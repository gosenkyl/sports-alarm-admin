import SportsAlarm from '../sports-alarm/serializer';

export default SportsAlarm.extend({

  attrs: {
    homeTeam: {key: "homeTeamId"},
    awayTeam: {key: "awayTeamId"}
  }


});
