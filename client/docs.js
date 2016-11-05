
Template.docs.helpers({
docs: function(){
	q={};
	s=Session.get("search");
	if (s){

		to = {to: {$regex: s}};
		title = {title: {$regex: s}};
		q["$or"]=[to,title];
	}
	return Documents.find(q).fetch();
}
});
Template.docs.events({
	'keyup #search' : function(){
		Session.set("search", search.value);
	}
});