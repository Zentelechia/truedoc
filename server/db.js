var Docs = new FilesCollection({
  collectionName: 'Docs',
  storagePath: '~/data',
  allowClientCode: false, // Disallow remove files from Client
  onBeforeUpload: function (file) {
    return true;
    /*
    if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    } else {
      return 'Please upload image, with size equal or less than 10MB';
    }
    */
  },
  onAfterUpload: function(fileObj) {
    console.log(fileObj.path);

  var fs = Npm.require('fs');
    // file originally saved as public/data/taxa.csv
    fs.readFile(fileObj.path,  function (err, data) {
        Meteor.call("ipfsAdd", data, function(err, result){
        console.log("ipfs hash ",result);
      });
    //    console.log(data);
    });
    /*
    let reader = new FileReader();
    reader.onload = function(){
      let arrayBuffer = new Uint8Array(reader.result);

      Meteor.call("ipfsAdd", arrayBuffer, function(err, result){
        console.log("ipfs hash ",result);
      });
    }
    reader.readAsArrayBuffer(fileObj);
 */
    }
  
});