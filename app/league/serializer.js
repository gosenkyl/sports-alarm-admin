import SportsAlarm from '../sports-alarm/serializer';

export default SportsAlarm.extend({

  attrs: {
    teams: {serialize: false, deserialize: 'records'}
  }

});
