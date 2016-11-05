
Template.docs.helpers({
docs: function(){
	q={};
	s=Session.get("search");
	if (s){
		q.to={$regex: s};
		q.title={$regex: s}
	}
	return Documents.find(q).fetch();
}
});
Template.docs.events({
	'keyup #search' : function(){
		Session.set("search", search.value);
	}
});