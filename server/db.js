var Documents=new Meteor.Collections('documents');
Meteor.publish("mydocs", function(){
	return Documents.find({user_id: this.userId});
})