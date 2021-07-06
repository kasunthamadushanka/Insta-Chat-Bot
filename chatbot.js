const Insta = require('@androz2091/insta.js');
const client = new Insta.Client();
const chatbot = require("node-fetch").default;

client.on('connected', () => {
    console.log(` My Username Is ${client.user.username}`);
});

client.on('messageCreate', (message) => {
    if (message.author.id === client.user.id) return
    message.markSeen();

    if(message.content.toLowerCase().includes('Who Is Moezilla')) return message.chat.sendMessage('My Master MoeZilla');
    if(message.content.toLowerCase().includes('!repo')) return message.chat.sendMessage('https://github.com/MoeZilla/Insta-Chat-Bot');
    if(message.content.toLowerCase().includes('!Repo')) return message.chat.sendMessage('https://github.com/MoeZilla/Insta-Chat-Bot');
    if(message.content.toLowerCase().includes('!ping')) return message.chat.sendMessage('pomg');

    chatbot(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(message.content)}&botname=${client.user.username}&ownername=MoeZilla`)
    .then(res => res.json())
    .then(json => {
      if(!json.message) return;
      return message.reply(json.message);
    }).catch(err => {});
});

client.login(process.env.username, process.env.password);
