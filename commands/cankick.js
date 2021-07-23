module.exports = {
  name: "cankick",
  description: "Checking if role can kick",
  execute(message, args) {
    if (message.member.permissions.has("BAN_MEMBERS")) {
      message.channel.send("You have the permission to ban members");
    } else {
      message.channle.send("You do not have the permission to ban members");
    }
  },
};
