var  program = require('commander');

program.version('0.0.1')
    .option('-p, --port [number]', 'Port to send messages to', 3333)
    .option('-h, --host [address]', 'IP addresst to send messages to', '127.0.0.1')
    .option('-b, --bpm [number]', 'Beats per minute', 128)
    .option('-a, --address [address]', 'OSC Address', '/beat/')
    .parse(process.argv);

var bpm = 60000/program.bpm;
var osc = require('node-osc');
var client = new osc.Client(program.host,  program.port);
var beatcount = 0;
setInterval(function () {
    client.send(program.address, ++beatcount);
    if (beatcount === 4) { 
        process.stdout.write("|");
        beatcount = 0; 
    } else {
        process.stdout.write("+");
    }
}, bpm);

console.log("At", program.bpm,"sending the address '", program.address, "' to ip", program.host,"on port", program.port);