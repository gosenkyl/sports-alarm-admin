import Ember from 'ember';
import {task} from 'ember-concurrency';

let {
  Service,
  inject
  } = Ember;

export default Service.extend({

  store: inject.service("store"),

  saveTeam: task(function * (team){
    let savedTeam = yield team.save();
    return savedTeam;
  })


});
