const config = require('../config'); //include main config
const configcc = require('./configcc'); //include config for CCs

exports.createCmd = function(msg, clinet, args){//mgs = message obdj, client = bot client obdj, args = array of arguments
  msg.delete(1000);// del message
  makeChannel(msg, args[0]);
}

function makeChannel(message, name){//function to create
    var server = message.guild; //set server to the server message was sent from

    server.createChannel(name, "text");
}
