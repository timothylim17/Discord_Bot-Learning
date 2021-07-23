require("dotenv").config();

module.exports = {
  name: "reactionrole",
  description: "Sets up a reaction role msg",
  async execute(message, args, Discord, client) {
    const channel = process.env.REACTION_CHANNEL;
    const weebRole = message.guild.roles.cache.find(
      (role) => role.name === "Team Weeb"
    );
    const nonWeebRole = message.guild.roles.cache.find(
      (role) => role.name === "Team non-Weeb"
    );
    const weebEmoji = client.emojis.cache.get("867867773443375114");
    const nonWeebEmoji = client.emojis.cache.get("867867758593835020");

    let reactionRoleEmbed = new Discord.MessageEmbed()
      .setColor("#e42643")
      .setTitle("Choose a team!")
      .setDescription(
        "Choosing a team will allow you to open the specified channel for your team!\n\n" +
          `${weebEmoji} for Weeb Team\n` +
          `${nonWeebEmoji} for non-Weeb Team`
      );

    message.delete({ timeout: "2000" });

    let messageEmbed = await message.channel.send(reactionRoleEmbed);
    messageEmbed.react(weebEmoji);
    messageEmbed.react(nonWeebEmoji);

    client.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.id === weebEmoji.id) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(weebRole);
        }
        if (reaction.emoji.id === nonWeebEmoji.id) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(nonWeebRole);
        }
      } else {
        return;
      }
    });

    client.on("messageReactionRemove", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.id === weebEmoji.id) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(weebRole);
        }
        if (reaction.emoji.id === nonWeebEmoji.id) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(nonWeebRole);
        }
      } else {
        return;
      }
    });
  },
};
