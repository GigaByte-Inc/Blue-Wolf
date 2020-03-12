const Discord = require("discord.js");

module.exports = {
  name: "ping",
  category: "utility",
  description: "Check Bot's ping!",
  usage: "ping",
  run: async (client, message, args) => {

    const m = await message.channel.send("If you can see this the bot is slow or the discord api is slow");
    let embed = new Discord.RichEmbed()
    .setAuthor(" | " + message.author.tag, message.author.avatarURL)
    .setDescription(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`)
    .setFooter(client.config.footer, client.user.avatarURL)
    .setThumbnail(message.guild.iconURL)
    .setColor("RANDOM")
    .setTimestamp()
    .setTitle("Pong!")
m.edit(embed);

 
}
}
