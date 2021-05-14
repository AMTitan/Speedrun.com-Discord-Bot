const request = require("request");
require("dotenv").config();
const {Client} = require("discord.js");
const client = new Client();
const Prefix = "SR!";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`${client.user.tag} bot is on`);
    client.user.setActivity(`${Prefix}help`, {
        type: `WATCHING`
    })
})

client.login(process.env.DISCORD_TOKEN)