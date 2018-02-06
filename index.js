const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'Hey bot') {
    message.reply('Hey');
  }
});

client.login('NDAzNjUzNTkyNTU0MTQzNzU2.DVsTUw.09IkRq3Q6-UDGCA4Y8Hj5yyXfHg');
