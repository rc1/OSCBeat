# OSCBeat

Send a simple beat message to an OSC server via a simple command line app. (Requires node.js)

## Install

Clone this repository, `cd` into it then run: 

    npm install -g

## Usage

To send 60 bpm per minute to localhost, from terminal

    oscbeat

## Command line options

    -h, --help            output usage information
    -V, --version         output the version number
    -p, --port [number]   Port to send messages to
    -h, --host [address]  IP addresst to send messages to
    -b, --bpm [number]    Beats per minute
    
