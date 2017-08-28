import Ember from 'ember';
import moment from 'moment';

let {
  Mixin,
  computed,
  get
  } = Ember;

export default Mixin.create({

  gameTimeFormatted: computed("dateTime", function(){
    return moment(get(this, "dateTime")).format('MMMM Do YYYY, h:mm a');
  })

});
