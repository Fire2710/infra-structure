const { MessageEmbed, MessageAttachment } = require("discord.js");
const diceImg = new MessageAttachment('./assets/img/dice.png');
const randomDice = () => Math.floor(Math.random() * 6) + 1;

module.exports = {
    name: 'dice',
    description: 'Renvoie la valeur de plusieurs dés.',
    execute(client, message, args) {
        const embed = new MessageEmbed()
            .setTitle("Random Dice")
            .setDescription("Lancement des dés...")
            .setColor("#00DAFF")
            .setThumbnail('https://zupimages.net/up/20/27/73uk.png')
            .addFields(
                { name: '__**#1**__', value: randomDice(), inline: true },
                { name: '__**#2**__', value: randomDice(), inline: true },
                { name: '__**#3**__', value: randomDice(), inline: true }
            )
            .addFields(
                { name: '__**#4**__', value: randomDice(), inline: true },
                { name: '__**#5**__', value: randomDice(), inline: true },
                { name: '__**#6**__', value: randomDice(), inline: true }
            )
            .addField("Informations supplémentaires :", `Requête envoyé par ${message.author}`)


        message.channel.send(embed)
    }
}
