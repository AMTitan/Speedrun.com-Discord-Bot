const request = require("request");
require("dotenv").config();
const {Client} = require("discord.js");
const client = new Client();
const Prefix = "SR!";

//api https://github.com/speedruncomorg/api/tree/master/version1

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`${client.user.tag} bot is on`);
    client.user.setActivity(`${Prefix}help`, {
        type: `WATCHING`
    })
})

client.on('message', (message) => {
    if (message.guild && !message.guild.me.permissionsIn(message.channel.id).any("SEND_MESSAGES")) return;
	if (message.author.bot === true) return;
	if (message.guild && !message.guild.me.permissionsIn(message.channel.id).any("EMBED_LINKS")) {
		message.channel.send("Sorry I cant send embeds");
	}
	if (message.guild && !message.guild.me.permissionsIn(message.channel.id).any("EMBED_LINKS")) return;
	if (message.mentions.users && message.mentions.users.first()) {
		if (message.mentions.users.first().id === client.user.id) {
			const Embed = {
				color: '#00ff00',
				title: `My help cmd is ${Prefix}help`,
				url: "",
				author: {
					Name: 'Speed Run',
					icon_url: "",
					url: '',
				},
				description: ``,
				thumbnail: "",
				fields: [],
				image: {
					url: ""
				},
				footer: {
					test: '',
					icon_url: "",
				},
			}
			message.channel.send({
				embed: Embed
			});
		}
	}
	if (!message.content.toLowerCase().startsWith(Prefix.toLowerCase())) return;
	console.log(`[${new Date}]: ${message.content}`);
	var [commandName, ...args] = message.content.toLowerCase()
		.trim()
		.substring(Prefix.length)
		.split(/\s+/);
	if (!commandName) {
		var [commandName, ...args] = message.content.toLowerCase()
		.trim()
		.substring(Prefix.length + 1)
		.split(/\s+/);
	}
	if (!commandName) {
		const Embed = {
			color: '#00ff00',
			title: `My help cmd is ${Prefix}help`,
			url: "",
			author: {
				Name: 'Speed Run',
				icon_url: "",
				url: '',
			},
			description: ``,
			thumbnail: "",
			fields: [],
			image: {
				url: ""
			},
			footer: {
				test: '',
				icon_url: "",
			},
		}
		message.channel.send({
			embed: Embed
		});
	}
	if (!commandName) return;
})

client.login(process.env.DISCORD_TOKEN)