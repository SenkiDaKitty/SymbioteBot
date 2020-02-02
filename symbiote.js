const Discord = require('discord.js');
const auth = require('./auth.json');
const client = new Discord.Client({
    commandPrefix: auth.prefix,
    autorun: true
    
});

console.log(process.env.BOT_TOKEN)

client.login(process.env.BOT_TOKEN);

client.on('message', msg => {



    let prefix = 's!suggest ';
    let message = msg.content.toLowerCase();

    if (msg.author.bot) {
        return;
    } else if (msg.channel.id != "673311018662756364") {
        return;
    } else {
        msg.delete();
        console.log(message.startsWith(prefix))
        if (message.startsWith(prefix) != true) {
            return;
        } else {
            message = message.replace('s!suggest ', '');
            var suggestanswer = new Discord.RichEmbed()
            .setAuthor(msg.author.username, msg.author.avatarURL)
            .setDescription(`${msg.author} Has submitted a suggestion ! Check <#673313330504663051> to vote !`)
            .setColor(0xff4c4c)
            msg.reply(suggestanswer)
        var suggestion = new Discord.RichEmbed()
            .setAuthor(msg.author.username, msg.author.avatarURL)
            .setDescription(`${msg.author} Has submitted a suggestion !`)
            .addField('Here is the suggestion :', message)
            .setColor(0xff4c4c);
        client.channels.get('673313331343392769').send(suggestion)
        client.user.setActivity("Made by : ChillwSenki", { type: 'PLAYING' });
        return;
        }
    }
});
