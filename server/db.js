Documents=new Meteor.Collection('documents');
Meteor.publish("mydocs", function(user_id){
	user=Meteor.users.findOne(user_id);
	email=user.emails[0].address;
	console.log(user.emails[0].address);
	return Documents.find({$or: [{user_id: user._id},{to: email}]});

})