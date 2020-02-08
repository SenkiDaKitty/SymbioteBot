const Discord = require('discord.js');
const auth = require('./auth.json');
const client = new Discord.Client({
    commandPrefix: auth.prefix,
    autorun: true
    
});

console.log(process.env.BOT_TOKEN)

client.login(process.env.BOT_TOKEN);
client.on('ready', () => {
console.log('login..');
client.user.setActivity(`The Symbiote Guild | s!suggest & s!report`, { type: "WATCHING" });
client.user.setStatus('dnd');
console.log('ready!');
});

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
        return;
        }
    }
});
client.on('message', message => {
let prefix = 's!';
    if (message.content.startsWith(prefix + "setgame")) {
        if (message.member.id != '420334391286300673') {
            return message.channel.sendMessage("Only Sniedeltje can use this command ! :warning:")
        } else {
        var args = message.content.substring(prefix.length).split(" ");
        let game = args.slice(1).join(' ')   
        if (!game) {
            var ErreurGame = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle(`Error ! ❌`)
            .addField(`Please, precise the message I have to set as an activity.`,`My description has not been changed.`)
            .setColor(0xff4c4c);
            message.channel.send(ErreurGame)
        } else {
            var GameSucces = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle(`Success ! ✔️`)
            .addField(`Description has been successfully updated ! :`,`${game}`)
            .setColor(0x4274f3);
    message.channel.send(GameSucces)
    client.user.setActivity(game, { type: 'PLAYING' });
    
        }
    }
}
});
