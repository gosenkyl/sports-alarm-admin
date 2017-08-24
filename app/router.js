import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('teams', {path: 'teams/:leagueId'});
  this.route('schedule', {path: 'schedule/:team_id'});
});

export default Router;
