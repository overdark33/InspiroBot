// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', function onMessage(msg) {
	if (msg.content === '!quote'){
  fetch('http://inspirobot.me/api?generate=true')
  .then (function(response){return response.text();})
  .then (function(data){
	  const imgurl = data;
	  console.log (imgurl);
	  msg.channel.send("", {files: [imgurl]});
  });
	}
});
client.login(process.env.DISCORD_TOKEN);