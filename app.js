console.log("Hi guys this is my first discord bot")

const Discord = require('discord.js');
const fetch = require('node-fetch');

const client = new Discord.Client();



// REQUIRE .ENV FILE
require('dotenv').config();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (msg) => {

  // soft message part ---------------------
   if (msg.content === 'kool') {
    msg.reply(`You are also Kool. 😎 `);
  }
  else if (msg.content === 'thank U') {
    msg.reply(`Welcome Boss. ❤️💙 `);
  }
  else if (msg.content === 'ok') {
    msg.reply(`😘`);
  }
  else if (msg.content === 'gg') {
    msg.reply(`GG Boss!`);
  }
  
  // -----------ends here----------------

  // token------------------
  let tokens = msg.content.split(' ');

  // -------------GIF CODE----------------
  if (tokens[0] === '!gif') {

    let keywords = 'kitten';
    if (tokens.length > 1) {
      keywords = tokens.slice(1, tokens.length).join(" ");
    }

    // fetching gif api from tenor
    let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=high` //using filter for safe content
    let response = await fetch(url);
    let json = await response.json();

    const index = Math.floor(Math.random() * json.results.length)
    let api = json.next;

    if (api == '0') {
      msg.reply('invaild !! ');
    }
    else {
      let tenor = json.results[index].url;
      msg.channel.send(tenor);
    }
  }
});

client.login(process.env.DISCORDBOTKEY);
