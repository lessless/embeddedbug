import { moduleForModel, test } from 'ember-qunit';

moduleForModel('email', 'Unit | Model | email', {
  // Specify the other units that are required for this test.
  needs: ['model:profile']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
