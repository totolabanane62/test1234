const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setAuthor("GiveawayLibelluleRP")
      .setTitle("Liste des commandes et guide pour le bot")
      .setDescription("Vous trouverez ci-dessous les commandes que vous pouvez faire avec Bot, pour le moment, il n'y a que 6 commandes disponibles, d'autres commandes seront bientôt ajoutées.")
      .setDescription("Vous trouverez ci-dessous les commandes que vous pouvez faire avec Bot, pour le moment, il n'y a que 6 commandes disponibles, plus de commandes seront bientôt ajoutées.")
      .addField("🎁 Giveaway 🎁","start [Nom du salon] [Temps] [Gagnant(s)] [Cadeau]\nreroll [Nom du cadeau]\nend [Nom du cadeau]")
      .addField("Examples", "g!start #giveaway 5m 1 Testing\ng!end Test\ng!reroll Test")
      .addField("😁 Fun 😁", "ping, invite", true)
      .addField("ℹ Information ℹ", "stats", true)
      .setTimestamp()
      .setFooter(`Commande demandée par ${message.author.tag}`, client.user.displayAvatarURL());
    message.channel.send("**Vous avez un mail 💌, Vérifier vos DM**");

    return message.author.send(help);
}

module.exports.help = {
  name: "help"
}
