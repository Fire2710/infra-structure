const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const prefix = ".";

// Create an instance of a Discord client
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
  if (message.content === prefix + "help") {
      const embed = new MessageEmbed()
        .setTitle("Erreur")
        .setDescription(":warning: une erreur s'est produite pendant l'execution de cette commande !")
        .addField("Informations supplémentaires", `La commande que vous avez essayer d'utiliser n'est pas encore prête à l'usage !\n Requête envoyé par **${message.author}**`)
        .setColor(0xEE3F3F)
      message.channel.send(embed);
  }
  });

client.login(process.env.TOKEN);
