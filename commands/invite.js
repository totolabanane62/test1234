const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    let prefix = config.prefix;
    if (message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    let invite = new Discord.MessageEmbed()
    .setTitle("Invite & Support Link!")
    .addField("Invite Link", "[Cliquez ici pour m'inviter](https://discord.com/api/oauth2/authorize?client_id=790944438184443934&permissions=8&scope=bot)")
    .addField("Support Server", "[Cliquez pour rejoindre le serveur de support](https://discord.gg/5vj4mRT7eP)")
    .setTimestamp()
    .setFooter(`Demandé par ${message.author.tag}`, client.user.displayAvatarURL())
    message.channel.send(invite);
}

module.exports.help = {
    name: "invite"
}
