
Documents=new Meteor.Collection('documents');

Tracker.autorun(function(){
  Meteor.subscribe("mydocs", Meteor.userId());
});
