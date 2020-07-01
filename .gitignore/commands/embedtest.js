const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'embedtest',
    description: 'Renvoie un embed de test',
    execute(client, message, args) {
        const embed = new MessageEmbed()
            .setTitle("Avertissement")
            .setColor("#f4c930")
            .setDescription("<:waring:727897002683400323> Cet embed n'est qu'un test pour les futurs mise à jour !")
            .setThumbnail("https://zupimages.net/up/20/27/nigi.png")
            .addField("Informations supplémentaires", `Requête envoyer par ${message.author}`)
            .setTimestamp()
            .setFooter("Infra-Structure")

        message.channel.send(embed)
    }
}
