'use strict'
const fs = require('fs');
const bencode = require('bencode');
const tracker = require('./tracker');
const torrentParser = require('./torrent-parser');

const torrent = torrentParser.open('Keijo 2016 SDM Dual Audio HEVC 10 bit.torrent');

tracker.getPeers(torrent, peers => {
    console.log('list of peers: ', peers);
});
