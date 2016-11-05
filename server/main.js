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
});



  Meteor.publish('docs.my', function () {
    return Docs.find({"meta.userId" : this.userId}).cursor;
}