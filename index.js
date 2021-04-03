const botLanguages = {};
botLanguages.ar = require('./ar-SA/bot.json');
botLanguages.en = require('./en-US/bot.json')
botLanguages.it = require('./it-IT/bot.json')

module.exports.botLangs = botLanguages;

module.exports.ex = require('./examples.json');