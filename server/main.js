import { Meteor } from 'meteor/meteor';
// for global access on server side
ipfsObj = false;

const testIpfs = function () {
  // start ipfs daemon
  let started = ipfsObj.start();
  // wait for process to start
  if (started) {
    // test api calls https://www.npmjs.com/package/ipfs-api
    ipfsObj.api.add(new Buffer('random stuff'), (err, data)=> {
      console.log('ipfs hash ' + data[0].Hash);
    });
  }
};

Meteor.startup(function () {
  ipfsObj          =  IpfsConnector.getInstance(); //singleton
  ipfsObj.setLogLevel('info'); // info is default
  testIpfs();
    Meteor.Mailgun.config({
      username: 'zentelechia@gmail.com',
      password: "v'qkUfy1@"
    });
});



  Meteor.publish('docs.my', function (user) {
//    if (user==this.userId) {
    return Docs.find().cursor;
   //}
 });