
Template.docs.helpers({
docs: function(){
	return Docs.find({"meta.userId" : this.userId}).fetch();
}
});