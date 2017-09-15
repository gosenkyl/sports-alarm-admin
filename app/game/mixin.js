import Ember from 'ember';
import moment from 'moment';

let {
  Mixin,
  computed,
  get
  } = Ember;

export default Mixin.create({

  dateTimeMoment: computed({
    get(){
      return moment(get(this, "dateTime"));
    }
  }),

  gameDateTimeFormatted: computed("gameDateFormatted", "gameTimeFormatted", function(){
    return `${get(this, "gameDateFormatted")}, ${get(this, "gameTimeFormatted")}`;
  }),

  gameDateFormatted: computed("dateTime", function(){
    return get(this, "dateTimeMoment").format('MMM Do YYYY');
  }),

  gameTimeFormatted: computed("dateTime", function(){
    return get(this, "dateTimeMoment").format('h:mm a');
  })

});
