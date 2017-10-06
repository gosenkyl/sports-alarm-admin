import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/'});
  this.route('leagues', { path: 'leagues/:league_id'});
  this.route('teams', { path: 'leagues/:league_id/teams/:team_id'});
});

export default Router;
