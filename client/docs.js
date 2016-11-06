Template.doc.onCreated(function () {
doc = this.data;
SimpleStorage.getTimeStamp(this.data.hash).then(function(value) {
        var date = JSON.stringify(value);
        date = date.replace(/"/g,"");
        if(date != 0) {
           date = new Date(parseInt(date)*1000);
           Documents.update(doc._id,{$set:{time: date}});
        }
});



});



Template.docs.helpers({
docs: function(){
	var q={};
	s=Session.get("search");
	if (s){
		console.log("s",s);
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
