import DS from 'ember-data';
import TeamMixin from './mixin';

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

  image: DS.attr()

});
