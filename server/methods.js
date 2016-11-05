Meteor.methods({
move2ipfs: function(fileObj){
	console.log(fileObj.path);

  var fs = Npm.require('fs');
    // file originally saved as public/data/taxa.csv
    fs.readFile(fileObj.path,  function (err, data) {
        Meteor.call("ipfsAdd", data, function(err, result){
        console.log("ipfs hash ",result);
      });
    //    console.log(data);
    });
}
});