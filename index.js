// Extract the required classes from the discord.js module
const { MessageCollector, Client, RichEmbed } = require('discord.js');
//const botconfig = require('./botconfig.json');
const commandes = require('./commandes');
const timer = require('timers');

// Create an instance of a Discord client
const client = new Client();

const express = require('express');

var app = express();

client.on('ready', () => {
prefix = process.env.PREFIX || botconfig.PREFIX;
console.log(`Logged in as ${client.user.username}`);
client.user.setActivity(`préfixe: ${prefix}`, { type: 'LISTENING' });
});

client.on('raw', event => {
if(event.t === "MESSAGE_REACTION_ADD") {
//--------------------------------------
//          ADD.RÉACTION->ROLE
//--------------------------------------
    if (event.d.channel_id === "572430115389308939" || event.d.channel_id==="563104709968265219") {
    const user = client.users.get(event.d.user_id);
    const guild = client.guilds.get(event.d.guild_id);
    guildMember = guild.members.get(user.id);
    switch (event.d.emoji.name) {
        case "🇷":
        newRole = guild.roles.find(x => x.name.toLowerCase() === "rosemont");
        guildMember.addRole(newRole)
            .then(console.log(`The role ${newRole.name} was added to ${user.username}`))
            .catch(console.error);
        break
        case "🇲":
        newRole = guild.roles.find(x => x.name.toLowerCase() === "mile-end");
        guildMember.addRole(newRole)
            .then(console.log(`The role ${newRole.name} was added to ${user.username}`))
            .catch(console.error);
        break
        case "🇦":
        newRole = guild.roles.find(x => x.name.toLowerCase() === "ahuntsic");
        guildMember.addRole(newRole)
            .then(console.log(`The role ${newRole.name} was added to ${user.username}`))
            .catch(console.error);
        break
        case "🇬":
        newRole = guild.roles.find(x => x.name.toLowerCase() === "gatineau");
        guildMember.addRole(newRole)
            .then(console.log(`The role ${newRole.name} was added to ${user.username}`))
            .catch(console.error);
        break
        case "📽":
        newRole = guild.roles.find(x => x.name.toLowerCase() === "prod")
        guildMember.addRole(newRole)
            .then(console.log(`The role ${newRole.name} was added to ${user.username}`))
            .catch(console.error);
        break
        case "🔩":
        newRole = guild.roles.find(x => x.name.toLowerCase() === "operations")
        guildMember.addRole(newRole)
            .then(console.log(`The role ${newRole.name} was added to ${user.username}`))
            .catch(console.error);
        break
        case "🎵":
        newRole = guild.roles.find(x => x.name.toLowerCase() === "musique")
        guildMember.addRole(newRole)
            .then(console.log(`The role ${newRole.name} was added to ${user.username}`))
            .catch(console.error);
        break
        case "🐤":
        newRole = guild.roles.find(x => x.name.toLowerCase() === "junior")
        guildMember.addRole(newRole)
            .then(console.log(`The role ${newRole.name} was added to ${user.username}`))
            .catch(console.error);
        break
        case "📱":
        newRole = guild.roles.find(x => x.name.toLowerCase() === "treize10huit")
        guildMember.addRole(newRole)
            .then(console.log(`The role ${newRole.name} was added to ${user.username}`))
            .catch(console.error);
        break
        case "📣":
        newRole = guild.roles.find(x => x.name.toLowerCase() === "comm")
        guildMember.addRole(newRole)
            .then(console.log(`The role ${newRole.name} was added to ${user.username}`))
            .catch(console.error);
        break
    }
    }
//--------------------------------------
//                REPLY
//--------------------------------------
    if(event.d.emoji.name === "reply") {
    const user = client.users.get(event.d.user_id);
    const channel = client.channels.get(event.d.channel_id);

    // if you're on the master/v12 branch, use `channel.messages.fetch()`
    channel.fetchMessage(event.d.message_id)
        .then(message => {
            let author;

            if (message.guild.members.get(message.author.id) === "undefined") {
                author = message.guild.members.get(message.author.id).nickname;
            } else {
                author = message.author.username;
            }

            if (!author) {
                author = message.author.username;
            }

        // custom emojis reactions are keyed in a `name:ID` format, while unicode emojis are keyed by names
        // if you're on the master/v12 branch, custom emojis reactions are keyed by their ID
            const replyEmbed = new RichEmbed()
                .setColor('#AAFFFF')
                .setAuthor(author, message.author.displayAvatarURL)
                .setTitle(`Ce message a été rappeler par **${user.username}**`)
                .addBlankField(true)
                .addField(`**`+message.content+`**`, message.url)
                .addBlankField(true)
                .setFooter('Message original envoyé')
                .setTimestamp(message.createdAt);
        channel.send(replyEmbed);
        })
        .catch(console.error);
    }
}
//--------------------------------------
//        REMOVE.RÉACTION->ROLE
//--------------------------------------
if(event.t === "MESSAGE_REACTION_REMOVE") {
    if (event.d.channel_id === "572430115389308939" || event.d.channel_id==="563104709968265219") {
    const user = client.users.get(event.d.user_id);
    const guild = client.guilds.get(event.d.guild_id);
    guild.fetchMember(user)
        .then(guildMember => {
        switch (event.d.emoji.name) {
            case "🇷":
            removedRole = guild.roles.find(x => x.name.toLowerCase() === "rosemont");
            guildMember.removeRole(removedRole)
                .then(console.log(`The role ${removedRole.name} was removed from ${user.username}`))
                .catch(console.error);
            break;
            case "🇲":
            removedRole = guild.roles.find(x => x.name.toLowerCase() === "mile-end");
            guildMember.removeRole(removedRole)
                .then(console.log(`The role ${removedRole.name} was removed from ${user.username}`))
                .catch(console.error);
            break;
            case "🇦":
            removedRole = guild.roles.find(x => x.name.toLowerCase() === "ahuntsic");
            guildMember.removeRole(removedRole)
                .then(console.log(`The role ${removedRole.name} was removed from ${user.username}`))
                .catch(console.error);
            break;
            case "🇬":
            removedRole = guild.roles.find(x => x.name.toLowerCase() === "gatineau");
            guildMember.removeRole(removedRole)
                .then(console.log(`The role ${removedRole.name} was removed from ${user.username}`))
                .catch(console.error);
            break;
            case "📽":
            removedRole = guild.roles.find(x => x.name.toLowerCase() === "prod");
            guildMember.removeRole(removedRole)
                .then(console.log(`The role ${removedRole.name} was removed from ${user.username}`))
                .catch(console.error);
            break;
            case "🔩":
            removedRole = guild.roles.find(x => x.name.toLowerCase() === "operations");
            guildMember.removeRole(removedRole)
                .then(console.log(`The role ${removedRole.name} was removed from ${user.username}`))
                .catch(console.error);
            break;
            case "🎵":
            removedRole = guild.roles.find(x => x.name.toLowerCase() === "musique");
            guildMember.removeRole(removedRole)
                .then(console.log(`The role ${removedRole.name} was removed from ${user.username}`))
                .catch(console.error);
            break;
            case "🐤":
            removedRole = guild.roles.find(x => x.name.toLowerCase() === "junior");
            guildMember.removeRole(removedRole)
                .then(console.log(`The role ${removedRole.name} was removed from ${user.username}`))
                .catch(console.error);
            break;
            case "📱":
            removedRole = guild.roles.find(x => x.name.toLowerCase() === "treize10huit");
            guildMember.removeRole(removedRole)
                .then(console.log(`The role ${removedRole.name} was removed from ${user.username}`))
                .catch(console.error);
            break;
            case "📣":
            removedRole = guild.roles.find(x => x.name.toLowerCase() === "comm");
            guildMember.removeRole(removedRole)
                .then(console.log(`The role ${removedRole.name} was removed from ${user.username}`))
                .catch(console.error);
            break;
        }
        });
    }
}
});

//--------------------------------------
//             ON MESSAGES
//--------------------------------------
client.on('message', message => {
prefix = process.env.PREFIX || botconfig.PREFIX;

if(message.author.bot)
    return;

console.log("message.channel.name.includes('annonce'):",message.channel.name.includes("annonce"));
console.log("message.mentions.users.count:",message.mentions.users.count === 'undefined');
console.log("message.mentions.roles.count:",message.mentions.roles.count === 'undefined');
if (message.channel.name.includes("annonce")) {
    if(message.mentions.users.count === undefined && message.mentions.roles.count === undefined) {
        console.log(message.mentions.users," & ",message.mentions.roles);
        message.channel.send(`Normalement, il faut mentionner les rôles ou personnes concernées par l'annonce que tu fais, ${message.author}. Je te conseille même de supprimer ton message et le réécrire en taggant les gens et rôles concernés (en utilisant le \`@\`)`)
        .then(console.log(`Avertissement de mentions envoyé dans ${message.channel.name}`))
        .catch(console.error());
    }
}

//--------------------------------------
//         CONDITIONS/PERMS
//--------------------------------------
if (message.author.bot || !message.content.startsWith(prefix) || message.content === prefix)
    return;
else if(!message.member.hasPermission('MANAGE_MESSAGES'))
    return message.channel.send("Ils semble que tu ne puisses pas utiliser mes commandes, oups!");



const args = message.content.toLowerCase().slice(prefix.length).split(/ +/);
const cmd = args.shift().toLowerCase();

console.log(`cmd: ${cmd}`);
console.log("args: ", args);

//--------------------------------------
//               AIDE
//--------------------------------------
if (cmd === "aide") {
    commandes.aide(args);
//    let embedhelpadmin = commande.aide(args);
//    return message.channel.send(embedhelpadmin);
}

//--------------------------------------
//          NOUVEAU PROJECT
//--------------------------------------
if(cmd === "project" || cmd === "projet") {
    const guild = message.guild;
    commandes.projet(args, guild);
}

//--------------------------------------
//               ARCHIVE
//--------------------------------------
if(cmd === "archive") {
    let channelTagged = message.mentions.channels.first();
    commandes.archive(message, channelTagged);
/*    if (channelTagged) {
    commandes.archive(message, channelTagged);
    message.channel.send(`J'ai archivé ${channelTagged}!`);
    }else{
    commandes.archive(message);
    }*/
}
});

//--------------------------------------
//        MESSAGE DE BIENVENUE
//--------------------------------------
client.on('guildMemberAdd', newMember => {
    newMember.createDM()
        .then(DMs => {
            DMs.send(`Bienvenue **@${newMember.user.username}** dans l'outil de communication de la Chapelle!
Tu n'as qu'à aller dans le channel **#assignation-de-roles** de l'équipe **${newMember.guild.name}** et réagir avec les emojis qui correspondent à tes rôles!
Si tu as des questions, tu peux toujours écrire dans **#pour-les-nouveaux** à la même place.`);
            console.log(`${newMember.user.username} est arrivé!`);
        })
        .catch(console.error);
});


//--------------------------------------
//        MESSAGE D'AU REVOIR
//--------------------------------------
client.on('guildMemberRemove', oldMember => {
    oldMember.createDM()
        .then(DMs => {
            DMs.send(`Si tu as quitté par erreur, tu peux rejoindre les deux équipes (global et local) avec ces liens, sinon on se reverra peut-être!\n
[Global] La Chapelle: http://discord.gg/yzQJpmS`);
            DMs.send(`[Local] La Chapelle: http://discord.gg/BAA7sHf`);
            console.log(`${oldMember.user.username} est parti!`);
            quitteChannel = oldMember.guild.channels.find(x => x.name === "quitte");
            quitteChannel.send(`${oldMember.user.username} est parti!`);
        })
        .catch(console.error);
});

//--------------------------------------
//              END/OTHER
//--------------------------------------
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Listening on ' + port);
});

client.login(process.env.TOKEN || botconfig.TOKEN);