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
  if (message.content === prefix + "help") {
    var embed = new Discord.RichEmbed()
        .setTitle("Erreur")
        .setDescription("<:4077_warning:702240781741719603> une erreur s'est produite pendant l'execution de cette commande !")
        .addField("Informations supplémentaires", "La commande que vous avez essayer d'utiliser n'est pas encore prête à l'usage !")
        .setColor('EE3F3F')
        .setFooter(`Requête envoyer par ${message.author}`)
      message.channel.send(embed);
  }
  });

client.login(process.env.TOKEN);
