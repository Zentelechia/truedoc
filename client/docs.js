var Docs = new FilesCollection({collectionName: 'Docs'});

Template.docs.helpers({
docs: function(){
	return Docs.find().fetch();
}
});