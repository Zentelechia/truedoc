Meteor.methods({
move2ipfs: function(fileObj){
	console.log(fileObj.path);

  var fs = Npm.require('fs');
    // file originally saved as public/data/taxa.csv
    data=fs.readFileSync(fileObj.path);
     
     Meteor.call("ipfsAdd", data, function(err, result){
        console.log("ipfs hash ",result);
        Docs.update(fileObj, {$set : {"meta.hash" : result}})
      });
    //    console.log(data);
} 
});