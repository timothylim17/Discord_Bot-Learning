module.exports = {
  name: "rules",
  description: "This command lists the rules",
  execute(message, args, Discord) {
    const rulesExecute = new Discord.MessageEmbed()
      .setColor("#304281")
      .setTitle("Rules")
      //.setURL("https://youtube.com/markiplier")
      .setDescription("This is an embed for ping")
      .addFields(
        { name: "Rule 1", value: "Be Respectful" },
        { name: "Rule 2", value: "Be Helpful" },
        { name: "Rule 3", value: "Have Fun :D" }
      )
      //.setImage()
      .setFooter("Make sure to check out the rules channel!");

    message.delete({ timeout: "1000" });
    message.channel.send(rulesExecute);
  },
};
