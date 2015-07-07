import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('profile', {name: 'Foo'});
  },
  setupController: function(controller,model) {
    let email = this.store.createRecord('email', {address: 'bar@baz.com', profile: model});
    model.get('emails').pushObject(email);
    this._super(...arguments);
  },
  afterModel: function(model) {
    model.save();
  },
  actions: {
    save:  function() {
      this.currentModel.save();
    }
  }
});
