Documents=new Meteor.Collection('documents');
Meteor.publish("mydocs", function(user_id){
	user=Meteor.users.findOne(user_id);
	console.log(user.emails);
	return Documents.find({$or: [{user_id: user._id},{to: user.emails[0].address}]});

})