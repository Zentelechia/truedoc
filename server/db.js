var Docs = new FilesCollection({
  collectionName: 'Docs',
  storagePath: '~/data',
  allowClientCode: false, // Disallow remove files from Client
  onBeforeUpload: function (file) {
    if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    } else {
      return 'Please upload image, with size equal or less than 10MB';
    }
  },
  onAfterUpload: function(fileObj) {
    let reader = new FileReader();
    reader.onload = function(){
      let arrayBuffer = new Uint8Array(reader.result);

      Meteor.call("ipfsAdd", arrayBuffer, function(err, result){
        console.log("ipfs hash ",result);
      });
    }
    reader.readAsArrayBuffer(fileObj);
    }
});