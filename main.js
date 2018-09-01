'use strict'
const fs = require('fs');
const bencode = require('bencode');

const torrent = bencode.decode(fs.readFileSync('Keijo 2016 SDM Dual Audio HEVC 10 bit.torrent'));
console.log(torrent.announce.toString('utf8'));
