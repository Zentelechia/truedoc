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
  if(typeof web3 === 'undefined')
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
  ipfsObj          =  IpfsConnector.getInstance(); //singleton
  ipfsObj.setLogLevel('info'); // info is default
  testIpfs();
    Meteor.Mailgun.config({
      username: 'postmaster@it-masters.org',
      password: '00fb5d140a2799ae976b2ef32fbb7cc1'
    });
});



  Meteor.publish('docs.my', function (user) {
//    if (user==this.userId) {
    return Docs.find().cursor;
   //}
 });
