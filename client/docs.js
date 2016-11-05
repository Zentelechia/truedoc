
Template.docs.helpers({
docs: function(){
	return Documents.find().fetch();
}
});