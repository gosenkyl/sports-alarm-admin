import Ember from 'ember';

let {
  Component,
  set,
  get,
  inject
  } = Ember;

export default Component.extend({
  classNames: ["team-card"],
  classNameBindings: ["isCollapsedVersion:team-card-collapsed:team-card-standard"],

  isCollapsedVersion: false,

  router: inject.service("router"),

  team: null,

  canEdit: false,
  isEditMode: false,

  showOrigin: true,
  teamNameStack: false,

  actions: {
    edit(){
      set(this, "isEditMode", true);
    },

    save(){
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
