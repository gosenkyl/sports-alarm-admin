import Ember from 'ember';

let {
  Route,
  get
  } = Ember;

export default Route.extend({

  model(params/*, transition*/){
    return get(params, "leagueId");
  }

});
