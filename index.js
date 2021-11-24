require('dotenv').config();

const Discord = require('discord.js');
const bot = new Discord.Client();

const possibleMessage = [
  'Deus me livre',
  'Como tá esse cardzão heim?',
  'Hummm, sei não heim... suspeito isso aí',
  'Tô com sono, tente novamente mais tarde',
  'Me pague!',
  'E o Ceará, já passou no ENEM?',
  'Tá bom, mas só porque você é meu chapa',
  'Tá é doido que eu vou rodar isso aí',
  'Espera 5 minutim',
  'Vai ver se eu tô lá na esquina'
];

bot.on('ready', () => {
  console.log('bot is ready!');
});

bot.on('message', message => {
  const { content } = message;

  if (content.startsWith('docker')) {
    console.log(content);
    const replyMessage = possibleMessage[returnRandomNumber()];
    message.reply(replyMessage);
  }
});

bot.login(process.env.TOKEN);

function returnRandomNumber() {
  return Math.floor(Math.random() * (9 - 0 + 1)) + 0;
}
