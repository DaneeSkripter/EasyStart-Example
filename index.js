const { EasyClient } = require('dis-easystart')

EasyClient({
    prefix_type: 'both', //true = slash only, false = only normal, both = slash and normal
    prefix: '!', // bot prefix
    database: '', //starts with mongodb://
    token: 'token', //bot token
    defaultCooldown: '3s', // default command cooldown
    language: '', // english, spanish, portuguese, russian, german, czech, slovak, turkish, polish, indonesian, italian
})

