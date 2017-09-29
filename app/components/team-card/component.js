import Ember from 'ember';
import {task} from 'ember-concurrency';
import TeamObj from 'sports-alarm-admin/objects/team';

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

  editTeam: null,

  canEdit: false,
  isEditMode: false,

  showOrigin: true,
  teamNameStack: false,

  save: task(function * (){
    let editTeam = get(this, "editTeam");

    set(this, "team.city", get(editTeam, "city"));
    set(this, "team.mascot", get(editTeam, "mascot"));

    yield get(this, "teamService.saveTeam").perform(get(this, "team"));
  }),

  actions: {
    edit(){
      let editTeam = TeamObj.create({
        city: get(this, "team.city"),
        mascot: get(this, "team.mascot")
      });

      set(this, "editTeam", editTeam);
      set(this, "isEditMode", true);
    },

    save(){
      get(this, "save").perform();

      set(this, "isEditMode", false);
      set(this, "editTeam", null);
    },

    cancel(){
      set(this, "isEditMode", false);
      set(this, "editTeam", null);
    },

    onClick(){
      let team = get(this, "team");
      get(this, "router").transitionTo(`/leagues/${get(team, "league.id")}/teams/${get(team, "id")}`);
    }
  }

});
