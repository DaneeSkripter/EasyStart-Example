const { EasyClient } = require('dis-easystart')

EasyClient({
    prefix: '!', // bot prefix
    token: 'token', //bot token
    defaultCooldown: '3s', // default command cooldown
    devServerID: '', // ID of your testing/dev server
})

