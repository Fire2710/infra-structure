module.exports = {
    name: 'ping',
    description: 'Renvoie la latence du bot',
    execute(message, args) {
        message.channel.send("Pong ! \n Commande en core de contruction, morceau manquant pour une execution complète.");
    }
}
