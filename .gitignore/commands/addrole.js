module.exports = {
    name: 'addrole',
    description: 'Ajoute un rôle',
    execute(client, message, args) {
        let role = message.guild.roles.cache.find(r => r.name === args.toString());
        if (role) {
            if (message.member.roles.cache.has(role.id)) return message.channel.send("vous avez déjà ce rôle ! Veuillez réessayer à nouveau.");
            if (role.permissions.has("KICK_MEMBERS")) return message.channel.send("Vous ne pouvez pas avoir ce rôle, celui-ci contient des permissions administratives");

            message.member.roles.add(role)
                .then(m => message.channel.send(`Vous possédez désormais le rôle **${role}**.`))
                .catch(e => console.log(e));
        } else {
            message.channel.send("Le rôle n'exista pas !");
        }
    }
}
