import DS from 'ember-data';

export default DS.Model.extend({
  email: 	      DS.attr('string'),
  first:        DS.attr('string'),
  last:         DS.attr('string'),
  profileImage: DS.belongsTo('image',{async: true}),
  messageRooms: DS.hasMany('message-room', { async: true }),
  fullName: function(){
    return this.get('first') + " " + this.get('last');
  }.property('first', 'last'),
  initial: function(){
    return this.get('first').charAt(0) + this.get('last').charAt(0) ;
  }.property()
});
