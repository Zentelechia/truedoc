var Documents=new Meteor.Collection('documents');
Meteor.publish("mydocs", function(){
	return Documents.find({user_id: this.userId});
})