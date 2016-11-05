Documents=new Meteor.Collection('documents');
Meteor.publish("mydocs", function(user){
	return Documents.find({user_id: user});
})