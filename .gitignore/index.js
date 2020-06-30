const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ".";

client.on('ready', () => {
    console.log('I am ready!');
  });
  
  client.on('message', message => {
    if (message.content === prefix + "avatar") {
      message.channel.send(message.author.displayAvatarURL());
    }
  if (message.content === 'bruh') {
      message.channel.send("<:bruh:726217332632059937>");
   }
  });

client.login(process.env.TOKEN);
