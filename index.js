var fs = require('fs');
var rrdStream = require('./package/index');

//input and output files
var rrdOrigin = "memory.xml.rrd"
var destination = "memory.json"

var end = Date.now();
var start = 0;

var rrd = fs.createReadStream(rrdOrigin);
var writeStream = fs.createWriteStream(destination);

rrd.pipe(rrdStream({ start: start, end: end})
    .on("row", function(){}))
    .pipe(writeStream);
