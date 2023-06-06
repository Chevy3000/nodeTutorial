const fs = require("fs");
const zlib = require("zlib");
const gunzip = zlib.createGunzip();
const rstream = fs.createReadStream("./example2.gz");
const wstream = fs.createWriteStream("./example3.txt");
rstream.pipe(gunzip).pipe(wstream);
