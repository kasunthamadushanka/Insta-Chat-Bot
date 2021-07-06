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
    if (m.content === '!ping') {
        m.reply('Pong')
    }
    if (m.content === '!repo') {
        m.reply('https://github.com/MoeZilla/Insta-Chat-Bot')
    }

    chatbot(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(m.content)}&botname=${process.env.AiNamd}&ownername=${process.env.Owner}`)
    .then(res => res.json())
    .then(json => {
      if(!json.message) return;
      return m.reply(json.message);
    }).catch(err => {});
});

Moe.login(process.env.Username, process.env.Password);

