
Template.docs.helpers({
docs: function(){
	q={};
	s=Session.get("search");
	if (s){

		to = {to: {$regex: new RegExp(s, "i")}};
		title = {title: {$regex: new RegExp(s, "i")}};
		hash= {hash: {$regex: new RegExp(s, "i")}};
		title = {title: {$regex: new RegExp(s, "i")}};
		q["$or"]=[to,title,hash];
	}
	return Documents.find(q).fetch();
}
});
Template.docs.events({
	'keyup #search' : function(){
		Session.set("search", search.value);
	}
});