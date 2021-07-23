module.exports = {
  name: "youtube",
  description: "sends markiplier's youtube link",
  execute(message, args) {
    //! To get the role ID, do \@mod (or whatever the name of the role) in Discord
    if (message.member.roles.cache.has("867231755257643068")) {
      message.channel.send("http://youtube.com/markiplier");
      // //? Command to remove the user mod
      // message.member.roles.remove("867231755257643068");
    } else {
      message.channel.send(
        "Need to be a mod to use this command, now you are a mod."
      );
      // //? Command to make the user a mod
      // message.member.roles.add("867231755257643068").catch(console.error);
    }
  },
};
