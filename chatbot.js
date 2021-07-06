const Insta = require('@androz2091/insta.js');
const Moe = new Insta.Client();
const chatbot = require("node-fetch").default;

Moe.on('connected', () => {
    console.log(`I Am Ready`);
});
