const { EasyStart } = require('dis-easystart')

EasyStart({
    prefix_type: 'both', //true = slash only, false = only normal, both = slash and normal
    prefix: '!',
    database: '', //starts with mongodb://
    token: 'token', //bot token
    defaultCooldown: '3s' // defu
})


