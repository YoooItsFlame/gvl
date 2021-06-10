const Discord = require('discord.js')
const client = new Discord.Client().setMaxListeners(0)
const command = require('./command')
const config = require('./config.json')

client.on('ready', () => {
    console.log('The Client Is Ready')
    
    

// Help Command
    command(client, 'help', (message) => {

        const logo = 'https://cdn.shopify.com/s/files/1/0899/1470/t/14/assets/character-peppa.png?v=18258223491115188707'

        const embed = new Discord.MessageEmbed()
            .setTitle('Help Menu')
            .setURL('http://lightningflame.tk')
            .setAuthor(message.author.username)
            .setThumbnail(logo)
            .setColor('#00AAFF')
            .setDescription(`**Welcome To Daddy Pig Bot!**
            
Try Running **+commands** To See All The Commands`)

            message.channel.send(embed)
    })

// Changes Status At Online State

    const { prefix } = config

    client.user.setPresence({
        activity:{
            name: `Protecting Peppa | https://discord.gg/MUnm4DBGmt`
        }
    })
    


// Sends Message If Message === + with a Space
    
    command(client, '', (message) => {

        const logo = 'https://cdn.shopify.com/s/files/1/0899/1470/t/14/assets/character-peppa.png?v=18258223491115188707'

        const embed = new Discord.MessageEmbed()
            .setTitle('Daddy Pig')
            .setURL('http://lightningflame.tk')
            .setAuthor(message.author.username)
            .setThumbnail(logo)
            .setColor('#00AAFF')
            .setDescription(`**You Havent Used a Command**
            
Try Running **+commands** To See All The Commands`)
            .setFooter('Daddy Pig | FlameLightPower')
            

            message.channel.send(embed)
    })

    // Basic Test Commands


    command(client, ['cc', 'clearchannel'], message => {
        if (message.member.hasPermission('MANAGE_MESSAGES') || member.hasPermission('ADMINISTRATOR')) {
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(results)
                message.channel.send("**Cleared Some Messages!**")
            })
        }else (message.channel.send("**:warning: You Can't Run This Command Because You Don't Have `MANAGE_MESSAGES` Permission :warning:**"))
    })

    // +commands Command

    command(client, 'commands', (message) => {

        const logo = 'https://cdn.shopify.com/s/files/1/0899/1470/t/14/assets/character-peppa.png?v=18258223491115188707'

        const goz = new Discord.MessageEmbed()
            .setTitle('Current Commands')
            .setURL('http://lightningflame.tk')
            .setAuthor(message.author.username)
            .setThumbnail(logo)
            .setColor('#00AAFF')
            .setDescription(`**__Note: Do Not Use These Commands In DMs As It Will Crash The Bot__**
            
**+rickroll - Sends a Gif Of Never Gonna Give You Up**
**+cake? - Sends a Reply**
**+hmm - Sends a Gif**
**+georgecri - Sends a Gif**
**+awkward - Sends a Gif**

**__Admin Commands__**:
View Admin Commands By Running **+acmd**`)
            .setFooter('Daddy Pig | FlameLightPower')

            message.channel.send(goz)
    })

// Commands - - - -----------------------------------

    command(client, ['cake?'], message => {
        message.channel.send('Oh... I Seem To Have Ate The Cake :|')
    })
    command(client, ['rickroll', 'rr', 'rickyrickroll'], message => {
        message.channel.send('https://i.pinimg.com/originals/88/82/bc/8882bcf327896ab79fb97e85ae63a002.gif')
    })
    command(client, 'hmm', message => {
        message.channel.send('https://media1.tenor.com/images/22b939e9dbefd23f513f189de558da24/tenor.gif?itemid=15332640')
    })
    command(client, 'georgecri', message => {
        message.channel.send('https://media1.tenor.com/images/cc16ef0f5f5b42efe411c83458d4d365/tenor.gif?itemid=17553271')
    })
    command(client, 'awkward', message => {
        message.channel.send('https://media1.tenor.com/images/8c22301d4c8a6bdc28997ae9d6892561/tenor.gif?itemid=8229392')
    })
    command(client, ['dps'], message => {
        if (message.member.hasPermission('MANAGE_GUILD') || message.hasPermission('ADMINISTRATOR')) {
            message.channel.send('**Successfully Changed Bot Presence**')
            const content = message.content.replace(`${prefix}dps `, ' ')

        client.user.setPresence({
            activity: {
                name:content,
                type:0,
            }
            })
        }else (message.channel.send("**:warning: You Can't Run This Command Because You Don't Have `MANAGE_GUILD` Permission :warning:**"))
    })
    command(client, ['acmd'], message => {
        if (message.member.hasPermission('MANAGE_GUILD')) {
            const logo = 'https://cdn.shopify.com/s/files/1/0899/1470/t/14/assets/character-peppa.png?v=18258223491115188707'

            const embed = new Discord.MessageEmbed()
                .setTitle('Admin Commands')
                .setURL('http://lightningflame.tk')
                .setAuthor(message.author.username)
                .setThumbnail(logo)
                .setColor('#00AAFF')
                .setDescription(`**__Note: Do Not Use These Admin Commands In DMs As It Will Crash The Bot__**

**+cc - Deletes Some Recent Messages**
**+dps - Custom Bot Presence**
**+ban - Ban User [+ban @FlameLightPower#5558]**
**+kick - Kick User [+kick @FlameLightPower#5558]**`)
    
                message.channel.send(embed)
        }else (message.channel.send("**:warning: You Can't Run This Command Because You Don't Have `MANAGE_GUILD` Permission :warning:**"))
    })

    // Kick and Ban Members

    command(client, 'ban', message => {
        const { member, mentions } = message

        const tag = `<@${member.id}>`

        if (member.hasPermission('BAN_MEMBERS') || 
        member.hasPermission('ADMINISTRATOR')
        ) {
            const target = mentions.users.first()
            if (target) {
                const targetMember = message.guild.members.cache.get(target.id)
                targetMember.ban()
                message.channel.send(`**You Have Successfully Banned <@${target.id}>**`)
            }else {
                message.channel.send(`**${tag}, Please Specify a User To Ban**`)
            }
        }else {
            message.channel.send(`:warning: **You Don't Have Permission To Use This Command** :warning:`)
        }
    })

    command(client, 'kick', message => {
        const { member, mentions } = message

        const tag = `<@${member.id}>`

        if (member.hasPermission('KICK_MEMBERS') || 
        member.hasPermission('ADMINISTRATOR')
        ) {
            const target = mentions.users.first()
            if (target) {
                const targetMember = message.guild.members.cache.get(target.id)
                targetMember.kick()
                message.channel.send(`**You Have Successfully Kicked <@${target.id}>**`)
            }else {
                message.channel.send(`**${tag}, Please Specify a User To Kick**`)
            }
        }else {
            message.channel.send(`:warning: **You Don't Have Permission To Use This Command** :warning:`)
        }
    })

    command(client, ['list','reminders'], message => {
        const glof = 'http://assets.stickpng.com/thumbs/589eec3364b351149f22a884.png'
        
        const reminder = new Discord.MessageEmbed()
            .setTitle('To Do List')
            .setAuthor('Mommy Pig')
            .setURL('https://discord.com/developers')
            .setThumbnail(glof)
            .setFooter('Daddy Pig | FlameLightPower')
            .setColor('00AAFF')
            .setDescription(`Nothing Here At The Moment..`)

        message.channel.send(reminder)
    })

    })


client.login(config.token)