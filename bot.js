const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("507486791423623172")
setInterval(function() {
channel.send(`af`)
channel.send(`as`)
channel.send(`asfdgsfgsfg`)
channel.send(`hdfh`)

}, 25)
})
 
 
client.login(process.env.BOT_TOKEN);
