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
    } else if (msg.channel.id != "668617988542431273") {
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
            .setDescription(`${msg.author} Your suggestion has been submitted to the moderators, please consider that the moderators' votes might take time !`)
            .setColor(0xff4c4c)
            msg.reply(suggestanswer)
        var suggestion = new Discord.RichEmbed()
            .setAuthor(msg.author.username, msg.author.avatarURL)
            .setDescription(`${msg.author} Has submitted a suggestion !`)
            .addField('Here is the suggestion :', message)
            .setColor(0xff4c4c);
        client.channels.get('673331768182702081').send(suggestion)
        client.user.setActivity("Made by : ChillwSenki | prefix : s!", { type: 'PLAYING' });
        return;
        }
    }
});
client.on('message', msg => {



    let prefix = 's!report ';
    let message = msg.content.toLowerCase();

    if (msg.author.bot) {
        return;
    } else if (msg.channel.id != "668617988542431273") {
        return;
    } else {
        msg.delete();
        console.log(message.startsWith(prefix))
        if (message.startsWith(prefix) != true) {
            return;
        } else {
            message = message.replace('s!report ', '');
            var reportsubmission = new Discord.RichEmbed()
            .setAuthor(msg.author.username, msg.author.avatarURL)
            .setDescription(`${msg.author} Your report has been successfully submitted to the moderators !`)
            .setColor(0xff4c4c)
            msg.reply(reportsubmission)
        var report = new Discord.RichEmbed()
            .setAuthor(msg.author.username, msg.author.avatarURL)
            .setDescription(`${msg.author} Has submitted a report !`)
            .addField('Here is the report ! :', message)
            .setColor(0xff4c4c);
        client.channels.get('673331768182702081').send(report)
        client.user.setActivity("Made by : ChillwSenki | prefix : s!", { type: 'PLAYING' });
        return;
        }
    }
});
