import DS from 'ember-data';

export default DS.Model.extend({ 
  sender: DS.belongsTo('user', { async: true }),
  body:   DS.attr('string'), 
  room:   DS.belongsTo('message-room', { async: true }),
  sentAt: DS.attr('date'),
  mine: function(){
    var isMine = this.session.get('user.id') === this.get('sender.id');
    return isMine;
  }.property('sender')
});