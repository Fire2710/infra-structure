const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "/";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.content[0] === PREFIX) {
    if(msg.content === PREFIX + 'verify') {
      
      let role = msg.guild.roles.find('name', '✅ • Vérifié')
      
      if(msg.member.roles.find('name', '✅ • Vérifié')) {
        msg.member.reply("Vous avez déjà ce rôle");
      }
      else {
        msg.member.addrole(role)
      }
    }
  }

    

client.login(process.env.TOKEN);
