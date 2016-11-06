Meteor.methods({
move2ipfs: function(fileObj){
	console.log(fileObj.path);

  var fs = Npm.require('fs');
    // file originally saved as public/data/taxa.csv
    data=fs.readFileSync(fileObj.path);
     Meteor.call("ipfsAdd", data, function(err, result){
        console.log("ipfs hash ",result);
        SimpleStorage.add(result).then(function(value) {
          console.log(value);
        });
        Documents.insert({user_id: Meteor.user()._id, from: Meteor.user().emails[0].address, hash: result, to : fileObj.meta.to, title: fileObj.meta.title, created_at: moment().format("DD.MM.YY HH:mm:ss")});
        Docs.remove(fileObj._id);
   ////     this.unblock();
        if (fileObj.meta.to)
         Meteor.Mailgun.send({
            to: fileObj.meta.to,
            from: "Подлинные документы <docs@it-masters.org>",
            subject: "Вам отправлен документ: " + fileObj.meta.title,
            html: "Пользователь "+Meteor.user.name+"("+Meteor.user().emails[0].address+") поделился с Вами документом <a href='https://ipfs.io/ipfs/"+result+"'>"+fileObj.meta.title+"</a>"
        });
      });
}
});
