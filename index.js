require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
const fs = require("fs");

const prefix = "!";

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Bot is online!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    client.commands.get("ping").execute(message, args);
  } else if (command === "youtube") {
    client.commands.get("youtube").execute(message, args);
  } else if (command === "cankick") {
    client.commands.get("cankick").execute(message, args);
  } else if (command === "rules") {
    client.commands.get("rules").execute(message, args, Discord);
  } else if (command === "reactionrole") {
    client.commands.get("reactionrole").execute(message, args, Discord, client);
  } else if (command === "nuke-this-channel") {
    client.commands.get("nuke-this-channel").execute(message, args);
  }
});

client.login(process.env.TOKEN);
