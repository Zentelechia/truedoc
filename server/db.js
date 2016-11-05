Documents=new Meteor.Collection('documents');
Meteor.publish("mydocs", function(user_id){
	user=Meteor.users.findOne(user_id);

	return Documents.find({$or: [{user_id: user._id},{to: user.emails[0].address}]});
})