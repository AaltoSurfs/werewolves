const sqlite3 = require("sqlite3");
const fs = require("fs");

userdb = new sqlite3.Database("user/user.db")

exports.init = function() {
  if (!fs.existsSync("user/user.db")) { //database file doesn't exist
    throw new Error("User database 'user/user.db' not found! Please create a new database by running 'user/user_db_schema.sql'! (This will happen automatically in the future)");
  }
}

exports.signupCmd = function (msg, client) {
  // TODO: add command parsing in msg_handler and not here!
  splitCmd = msg.content.split(" ");
  if (splitCmd.length !== 2){
    msg.reply("I'm glad you want to sign up but the correct syntax is `!signup <emoji>`")
  } else {
    msg.react(splitCmd[1]).catch(err=>{
      msg.reply(`${splitCmd[1]} is not a valid emoji...`)
    })
  //msg.channel.send("`"+msg.content+"`")
  }
};
