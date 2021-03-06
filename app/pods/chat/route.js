import Ember from "ember";

export default Ember.Route.extend({
  model: function(){
    return Ember.RSVP.hash({
      sessionUser: this.store.find('user', this.get('session.userSession.uid')),
      users: this.store.filter('user', { // live array
        orderBy: 'first'
      }, function () { return true; })
    });
  },
  setupController: function(controller, hash){
    controller.set('sessionUser', hash.sessionUser);
    var users = hash.users;
    controller.set('users', users);
  }
});
