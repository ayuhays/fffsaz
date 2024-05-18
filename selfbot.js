// selfbot.js

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async () => {
    console.log('Self-bot is ready');
    const channelId = process.env.CHANNEL_ID;
    const channel = await client.channels.fetch(channelId);
    if (!channel) return console.error('Invalid channel ID');
    const connection = await channel.join();
    console.log('Self-bot joined voice channel');
    connection.voice.setSelfDeaf(true);
    connection.voice.setSelfMute(true);
});

client.login(process.env.DISCORD_TOKEN);
