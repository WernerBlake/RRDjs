var fs = require('fs');
var rrdStream = require('./RRDStream');

//input and output files
var rrdOrigin = process.argv[2]
var destination = process.argv[3]

//rrdStream will pull all data as default
var end = Date.now();
var start = 0;

var rrd = fs.createReadStream(rrdOrigin);
var writeStream = fs.createWriteStream(destination);

rrd.pipe(rrdStream(/* { start, end } */)
    .on("row", function(){}))
    .pipe(writeStream);
