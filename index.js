// Extract the required classes from the discord.js module
const { Client, RichEmbed, Guild } = require('discord.js');
const botconfig = require('./botconfig.json');

// Create an instance of a Discord client
const client = new Client();

const express = require('express');

var app = express();

client.on('ready', () => {
  prefix = process.env.PREFIX || botconfig.PREFIX;
  console.log(`Logged in as ${client.user.tag} (${client.user.id})`);
  client.user.setActivity(`${prefix}aide`);
});

client.on('message', message => {
  prefix = process.env.PREFIX || botconfig.PREFIX;

  if (!message.content.startsWith(prefix) || message.content === prefix || message.author.bot)
    return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  console.log(`cmd: ${cmd}`);
  console.log("args: ", args);

//CREATE CHANNEL
  if(cmd === "project" || cmd === "projet") {    
    const guild = message.guild;
    if(!guild.available){
      console.log(`Guild not available???`)
      return;
    }
    
    guild.createChannel(args[0])
      .then(async newChannel => {
        await newChannel.setParent(`544343900748513280`)
        newChannel.overwritePermissions(guild.defaultRole, {
          VIEW_CHANNEL: false
        });
        newChannel.overwritePermissions(`535849987448242192`, {
          VIEW_CHANNEL: true
        });
//If all mentions
        permsArray = message.mentions.members.keyArray();
        permsArray = permsArray.concat(message.mentions.roles.keyArray());
        
//No mentions
        for(i=1;args[i];i=i+1) {
          guild.fetchMember(args[i]).then(addingMember => {
            console.log("addingMember");
            console.log(addingMember);
            permsArray = permsArray.concat(addingMember.id);
          })
          .catch(console.error);
        }

//Add permissions
        for(i=0;permsArray[i];i=i+1) {
          newChannel.overwritePermissions(permsArray[i], {
            VIEW_CHANNEL: true
          });
        }
      })//end of promise (then)
      .catch(console.error);
    
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Listening on ' + port);
});

client.login(process.env.TOKEN || botconfig.TOKEN);