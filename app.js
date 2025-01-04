String.prototype.rfi = function(word) {
    return this.replace(word, "").replace(/\s+/g, " ").trim();
};

function getUserIdFromMention(mention) {
    if (!mention) return null;

    const matches = mention.match(/^<@!?(\d+)>$/);

    if (matches) {
        return matches[1];
    }

    return null;
}


function getArgs(str) {
    let wordsArray = str.split(" ");
    
    wordsArray.shift();
    
    return wordsArray;
}

let fs = require('fs');
const { Client, GatewayIntentBits, Partials } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessageReactions],
    partials: [Partials.Message, Partials.Reaction, Partials.User]
});

const botPrefix = 'uwu ';

client.on('messageCreate', async message => {
    msg = message.content.rfi(botPrefix);
});

client.on('messageReactionAdd', async (reaction, user) => {
    return;
});

client.once('ready', () => {
    console.log('Bot is online!');
});

client.login(process.env.DISCORD_TOKEN);

