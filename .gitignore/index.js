const fs = require('fs');
const { Client, MessageEmbed, Collection } = require('discord.js');
const { PREFIX } = require('./config');

const client = new Client();
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
  console.log(client.commands);
}

client.on('ready', () => {
    console.log('I am ready!');
  });
  
  client.on('message', message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;
    client.commands.get(command).execute(message, args);
  });

client.login(process.env.TOKEN);
