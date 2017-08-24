import Ember from 'ember';

let {
  Component,
  set,
  get,
  inject
  } = Ember;

export default Component.extend({
  classNames: ["team-card"],

  router: inject.service("router"),

  team: null,

  isEditMode: false,

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
      get(this, "router").transitionTo(`/schedule/${get(team, "id")}`);
    }
  }

});
