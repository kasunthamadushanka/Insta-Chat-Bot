const Insta = require('@androz2091/insta.js');
const Moe = new Insta.Client();
const chatbot = require("node-fetch").default;

Moe.on('connected', () => {
    console.log(`I Am Ready`);
});

Moe.on('messageCreate', (m) => {
    if (m.author.id === Moe.user.id) return
    m.markSeen();

    if(m.content.toLowerCase().includes('Who Is Moezilla')) return m.chat.sendMessage('My Master MoeZilla');
    if(m.content.toLowerCase().includes('Who Is Moezilla')) return m.chat.sendMessage('My Master MoeZilla');
    if(m.content.toLowerCase().includes('!ping')) return m.chat.sendMessage('Pong');
    if(m.content.toLowerCase().includes('!repo')) return m.chat.sendMessage('https://github.com/MoeZilla/Insta-Chat-Bot');


    chatbot(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(m.content)}&botname=${process.env.BotName}&ownername=${process.env.OwnerName}&user=${m.author.id}`)
    .then(res => res.json())
    .then(json => {
      if(!json.message) return;
      return m.reply(json.message);
    }).catch(err => {});
});

Moe.login(process.env.Username, process.env.Password);

