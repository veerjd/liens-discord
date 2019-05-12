// Extract the required classes from the discord.js module
const { MessageCollector, Client, RichEmbed } = require('discord.js');
//const botconfig = require('./botconfig.json');
const commandes = require('./commandes');
const timer = require('timers');
const warningMessage = `Normalement, il faut mentionner les rôles ou personnes concernées quand tu fais une requête. Pas besoin de recommencer, fais juste écrire un nouveau message en taggant les personnes concernées (en utilisant le \`@\`)`;

// Create an instance of a Discord client
const client = new Client();

const express = require('express');

var app = express();

client.on('ready', () => {
    const prefix = process.env.PREFIX || botconfig.PREFIX;
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
    
    if(message.author.bot || message.content.startsWith("?"))
        return;

    //--------------------------------------
    //        GLOBAL OFFICIEL->LOCAL
    //--------------------------------------
    globalServer = client.guilds.find(x=>x.name == '[Global] La Chapelle');
    console.log("true:", globalServer === message.guild);
    console.log("true:", globalServer == message.guild);

    if (message.channel.name === "annonces-officielles" && message.guild === globalServer) {
        localServer = client.guilds.find(x=>x.name == '[Local] La Chapelle');
        localAnnonces = localServer.channels.find(x=>x.name=='annonces-officielles');
        let c = new RichEmbed()
            .setAuthor("Une nouvelle annonce dans le server Global:")
            .setColor(0xF5F5DC)
            .setTitle(message.content);
        localAnnonces.send(c);
    }

    //--------------------------------------
    //         AUTO-RESPONDER TAG
    //--------------------------------------
    if((!message.mentions.users.count === undefined && !message.mentions.roles.count === undefined) == false) {
        if (message.channel.name.includes("annonce") && message.channel.name != "annonces-officielles") {
            message.channel.send(`${message.author}`)
                .then(msg => {
                    setTimeout(()=>msg.delete(), 30000);
                })
                .catch(console.error());
            message.channel.send(warningMessage)
                .then(msg => {
                    console.log(`Avertissement de mentions envoyé dans ${message.channel.name}`);
                    setTimeout(()=>msg.delete(), 30000);
                })
                .catch(console.error());
        } else if (message.channel.name === "annonces-officielles" && message.guild === globalServer) {
            message.author.createDM(warningMessage);
        } else if (message.channel.name.includes("question")) {
            message.channel.send(`${message.author}`)
                .then(msg => {
                    setTimeout(()=>msg.delete(), 30000);
                })
                .catch(console.error());
            message.channel.send(warningMessage)
                .then(msg => {
                    console.log(`Avertissement de mentions envoyé dans ${message.channel.name}`);
                    setTimeout(()=>msg.delete(), 30000);
                })
                .catch(console.error());
        } else if (message.channel.name.includes("requêtes") && message.channel.name != "requêtes-de-prière") {
            message.channel.send(`${message.author}`)
                .then(msg => {
                    setTimeout(()=>msg.delete(), 30000);
                })
                .catch(console.error());
            message.channel.send(warningMessage)
                .then(msg => {
                    console.log(`Avertissement de mentions envoyé dans ${message.channel.name}`);
                    setTimeout(()=>msg.delete(), 30000);
                })
                .catch(console.error());
        }
    } 

    //--------------------------------------
    //           MANAGE MESSAGES
    //--------------------------------------
    if(!message.member.hasPermission('MANAGE_MESSAGES'))
        return message.channel.send("Ils semble que tu ne puisses pas utiliser mes commandes, oups!");
    
    const args = message.content.toLowerCase().slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    
    if(message.content.startsWith(prefix)) {
        console.log(`cmd: ${cmd}`);
        console.log("args: ", args);
    }

    //--------------------------------------
    //           COMMANDE: AIDE
    //--------------------------------------
    if (cmd === "aide") {
        commandes.aide(message, args, client.user.displayAvatarURL);
    //    let embedhelpadmin = commande.aide(args);
    //    return message.channel.send(embedhelpadmin);
    }

    //--------------------------------------
    //      COMMANDE: NOUVEAU PROJECT
    //--------------------------------------
    if(cmd === "project" || cmd === "projet") {
        const guild = message.guild;
        commandes.projet(args, guild);
    }

    //--------------------------------------
    //         COMMANDE: ARCHIVE
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

client.login(process.env.TOKEN/* || botconfig.TOKEN*/);