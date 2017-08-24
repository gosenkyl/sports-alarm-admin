import Ember from 'ember';
import TeamMixin from 'sports-alarm-admin/mixins/team';
import { module, test } from 'qunit';

module('Unit | Mixin | team');

// Replace this with your real tests.
test('it works', function(assert) {
  let TeamObject = Ember.Object.extend(TeamMixin);
  let subject = TeamObject.create();
  assert.ok(subject);
});
