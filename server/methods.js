Meteor.methods({
move2ipfs: function(fileObj){
	console.log(fileObj.path);

  var fs = Npm.require('fs');
    // file originally saved as public/data/taxa.csv
    data=fs.readFileSync(fileObj.path);
     Meteor.call("ipfsAdd", data, function(err, result){
        console.log("ipfs hash ",result);
        Documents.insert({user_id: Meteor.user()._id, hash: result, to : fileObj.meta.to, title: fileObj.meta.title});
        Docs.remove(fileObj._id);
        Email.send({
			from: "planzer.master@gmail.com",
			to: "zentelechia@gmail.com",
			subject: "Отзыв о KAMADA",
			text: reesult
	});	
      });
}
});