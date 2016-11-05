var Docs = new FilesCollection({
  collectionName: 'Docs',
  allowClientCode: false, // Disallow remove files from Client
  onBeforeUpload: function (file) {
    return true;
    /*
    if (file.size <= 10485760 ){ // && /doc/rtfpng|jpg|jpeg/i.test(file.extension)) {
      return true;
    } else {
      return 'Please upload image, with size equal or less than 10MB';
    }
    */
  }
});
