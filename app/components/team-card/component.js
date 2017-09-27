import Ember from 'ember';
import {task} from 'ember-concurrency';

let {
  Component,
  set,
  get,
  inject
  } = Ember;

export default Component.extend({
  classNames: ["team-card"],
  classNameBindings: ["isCollapsedVersion:team-card-collapsed:team-card-standard","isColumn:flex-column:flex-row"],

  isColumn: true,
  isHighlighted: false,
  isCollapsedVersion: false,

  router: inject.service("router"),
  teamService: inject.service("team"),

  team: null,

  canEdit: false,
  isEditMode: false,

  showOrigin: true,
  teamNameStack: false,

  save: task(function * (){
    yield get(this, "teamService.saveTeam").perform(get(this, "team"));
  }),

  actions: {
    edit(){
      set(this, "isEditMode", true);
    },

    save(){
      get(this, "save").perform();

      set(this, "isEditMode", false);
    },

    cancel(){
      set(this, "isEditMode", false);
    },

    onClick(){
      let team = get(this, "team");
      get(this, "router").transitionTo(`/leagues/${get(team, "league.id")}/teams/${get(team, "id")}`);
    }
  }

});
