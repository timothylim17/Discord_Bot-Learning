module.exports = {
  name: "nuke-this-channel",
  description: "Bot deletes last 99 messages in channel",
  async execute(message, args) {
    var msg_size = 100;
    while (msg_size == 100) {
      await message.channel
        .bulkDelete(100)
        .then((msgs) => (msg_size = msgs.size))
        .catch(console.error);
    }
    message.channel.send(`<@${message.author.id}>\n> ${message.content}`, {
      files: [
        "http://www.quickmeme.com/img/cf/cfe8938e72eb94d41bbbe99acad77a50cb08a95e164c2b7163d50877e0f86441.jpg",
      ],
    });
  },
};
