var mineflayer = require('mineflayer')
var tpsPlugin = require('../')(mineflayer)
if (process.argv.length < 4 || process.argv.length > 6) {
  console.log('Usage : node gettps.js <host> <port> [<name>] [<password>]')
  process.exit(1)
}
var bot = mineflayer.createBot({
  username: process.argv[4] ? process.argv[4] : 'tpsBot',
  password: process.argv[5],
  port: parseInt(process.argv[3]),
  host: process.argv[2]
})

bot.loadPlugin(tpsPlugin) // Load the plugin

// Example how to use
bot.on('chat', (username, message) => {
  if (username === bot.username) return
  if (message === 'tps') {
    bot.chat('Current tps: ' + bot.getTps())
  }
})
