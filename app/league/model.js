import DS from 'ember-data';

export default DS.Model.extend({

  parseFromDate: DS.attr(),
  parseToDate: DS.attr(),
  sequence: DS.attr()

});
