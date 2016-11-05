Meteor.subscribe("docs.my", Meteor.userId());
Documents=new Meteor.Collection('documents');
Meteor.subscribe("mydocs", Meteor.userId());