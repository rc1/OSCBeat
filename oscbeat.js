var  program = require('commander');

program.version('0.0.1')
    .option('-p, --port [number]', 'Port to send messages to', 3333)
    .option('-h, --host [address]', 'IP addresst to send messages to', '127.0.0.1')
    .option('-b, --bpm [number]', 'Beats per minute')
    .parse(process.argv);

console.log(program.port);

var bpm = (program.bpm)?60000/program.bpm:10000;

var osc = require('node-osc');
var client = new osc.Client(program.host,  program.port);
var beatcount = 0;
setInterval(function () {
    client.send("/beat/", ++beatcount);
    if (beatcount === 4) { beatcount = 0; }
}, bpm);

console.log("Sending",bpm,"to",program.host,"on port", program.port);