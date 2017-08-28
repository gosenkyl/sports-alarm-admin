import Ember from 'ember';
import GameMixin from 'sports-alarm-admin/mixins/game';
import { module, test } from 'qunit';

module('Unit | Mixin | game');

// Replace this with your real tests.
test('it works', function(assert) {
  let GameObject = Ember.Object.extend(GameMixin);
  let subject = GameObject.create();
  assert.ok(subject);
});
