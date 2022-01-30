const Discord = require('discord.js')
const client = new Discord.Client({
	intents: [Object.values(Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)]
})
const express = require('express');
const server = express();

var BotToken = "undefined"
var BotActivity = "undefined"
var BotActivityType = "undefined"
var Warn = "undefined"
var WordsList = ["fuck", "shit", "bitch", "asshole", "motherfucker"]
var Warntype = "undefined"
var DMWarn = "undefined"

exports.token = function (token) {
  BotToken = token
	console.log(`Token ${BotToken} Is Ready`)
}

exports.activity = function (activity, activitytype) {
	if(activitytype == 'PLAYING') {
    BotActivityType = activitytype  
} else if(activitytype == 'LISTENING') {
		BotActivityType = activitytype
} else if(activitytype == 'STREAMING') {
    BotActivityType = activitytype
} else if(activitytype == 'WATCHING') {
    BotActivityType = activitytype
} else if(activitytype == 'undefined') {
    throw new Error('Activity Type Undefined')
} else {
    throw new Error('Invalid Activity Type')
}
  BotActivity = activity
}

exports.words = function (words) {
  WordsList = words
  console.log('WordList Loaded Succesfully')
}

exports.warn = function (type, warn) {
    Warntype = type
    Warn = warn
    console.log('Warn & WarnType Successfully Setted')
}

exports.dmwarn = function (message) {
    DMWarn = message
    console.log(`DMWarn Message Successfully Setted`)
}

exports.start = function () {
     if(BotToken == 'undefined') {
       throw new Error('Bot Token Undefined')
} else {
	client.login(BotToken)
  console.log(`Succesfully Logined To The Bot Token`)
}

    if(BotActivityType == 'undefined') {
      throw new Error('Activity Type Undefined')
} else {
	client.on('ready', async () => {
		client.user.setActivity(BotActivity, {type: `${BotActivityType}`})
        console.log('Activity Status Successfully Loaded')
		console.log(`${client.user.tag} Now Ready`)
	})
}

	client.on('messageCreate', async (message) => {
const containsSmallWords =  WordsList.some(Smallword => message.content.toLowerCase().includes(Smallword))
const containsBigWords =  WordsList.some(Bigword => message.content.toUpperCase().includes(Bigword))		

if (Warntype == '1') {
   if(containsSmallWords){ 
  message.channel.send(Warn)
	message.delete()
	console.log(`Successfully Warned ${message.author} And Deleted "${message.content}"`)
   } else if (containsBigWords){ 
  message.channel.send(Warn)
	message.delete()
	console.log(`Successfully Warned ${message.author} And Deleted "${message.content}"`)
   }
} else if (Warntype == '2') {
   if(containsSmallWords){ 
  message.reply(Warn)
	console.log(`Successfully Replied To ${message.author}, Word Used:"${message.content}"`)
   } else if (containsBigWords){ 
  message.reply(Warn)
  console.log(`Successfully Replied To ${message.author}, Word Used:"${message.content}"`)
   }
} else if (Warntype == '3') {
   if(containsSmallWords){ 
	message.delete()
  console.log(`Successfully Deleted "${message.content}", Author:"${message.author}"`)
   } else if (containsBigWords){ 
	message.delete()
  console.log(`Successfully Deleted "${message.content}", Author:"${message.author}"`)
   }
} else if (Warntype == '4') {
   if(containsSmallWords){ 
	message.author.send(DMWarn)
  console.log(`Successfully DM To "${message.author}", Word:"${message.content}"`)
   } else if (containsBigWords){
  message.author.send(DMWarn)
console.log(`Successfully DM To "${message.author}", Word:"${message.content}"`)
   }
} else if (Warntype == '5') {
   if(containsSmallWords){ 
	message.author.send(DMWarn)
	message.delete()
  console.log(`Successfully DMed To "${message.author}", And Deleted Word:"${message.content}"`)
   } else if (containsBigWords){
  message.author.send(DMWarn)
  message.delete()
  console.log(`Successfully DMed To "${message.author}", And Deleted Word:"${message.content}"`)
   }
} else if (Warntype == 'undefined') {
   throw new Error('WarnType Undefined')
} else if (Warntype != '1') {
   throw new Error('Invalid Warn Type')
} else if (Warntype != '2') {
   throw new Error('Invalid Warn Type')
} else if (Warntype != '3') {
   throw new Error('Invalid Warn Type')
} else if (Warntype != '4') {
   throw new Error('Invalid Warn Type')
} else if (Warntype != '5') {
   throw new Error('Invalid Warn Type')
}
	})
}

exports.uptime = function () {
    server.all('/', (req, res)=>{
    res.send(`Uptimer Now Ready! Bot Username ${client.user.tag}`)
})
    server.listen(3000, ()=>{console.log("Uptime Server Now Ready")});
}