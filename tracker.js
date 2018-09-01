'use strict'

const dgram = require('dgram');
const Buffer = require('buffer').Buffer;
const urlParse = require('url').parse;

module.exports.getPeers = (torrent, callback) => {
    const socket = dgram.createSocket('udp4');
    const url = torrent.announce.toString('utf8');

    //send request to connect
    udpSend(socket, buildConnReq(), url);

    socket.on('message', response => {
        if (restType(response) === 'connect') {
            //recieve and parse response
            const connResp = parseConnResp(response);
            //send announce request
            const announceReq = buildAnnounceReq(connResp.connectionId);
            udpSend(socket, announceReq, url);
        } else if (respType(response) === 'announce') {
            //parse announce response
            const announceResp = parseAnnounceResp(response);
            //pass peers to callback
            callback(announceResp.peers);
        }
    });
};

function udpSend(socket, message, rawUrl, callback =()=>{}) {
    const url = url.parse(rawUrl);
    socket.send(message, 0, message.length, url.port, url.host, callback);
}

function respType(resp) {
    // ...
  }
  
  function buildConnReq() {
    // ...
  }
  
  function parseConnResp(resp) {
    // ...
  }
  
  function buildAnnounceReq(connId) {
    // ...
  }
  
  function parseAnnounceResp(resp) {
    // ...
  }