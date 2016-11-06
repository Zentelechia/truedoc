pragma solidity ^0.4.2;
contract SimpleStorage {
  mapping (address => uint[]) public docs;
  mapping (address => mapping (uint => uint)) public hashes;
  mapping (address => mapping (uint => uint)) public timestamps;

  function add(uint _ipfs_hash) {
    docs[msg.sender].push(_ipfs_hash);
    timestamps[msg.sender][_ipfs_hash] = block.timestamp;
  }
  
  function setHashForIpfsHash(uint _ipfs_hash, uint _doc_hash) {
    hashes[msg.sender][_ipfs_hash] = _doc_hash;
  }

  function getDocHash(uint _ipfs_hash) constant returns (uint retVal) {
    return hashes[msg.sender][_ipfs_hash];
  }

  function getTimeStamp(uint _ipfs_hash) constant returns (uint retVal) {
    return timestamps[msg.sender][_ipfs_hash];
  } 

  function getIpfsHashes() constant returns (uint[] retVal) {
    return docs[msg.sender];
  }
  
  function getLength() constant returns (uint retVal) {
    return docs[msg.sender].length;
  }
}



