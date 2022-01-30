<h1 align="center">
 <br>
  <a href="https://discord.gg/ymsDeHAMPY"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzwsS8JzhEGvoeDv2iaQ8F_nUpspxflcbsFhJVbm9oiJpHdK_Q2v8zzIo&s=10"></a>
  <br>
  Word Blocking Discord Bot
</h1>

<h3 align=center>Block Words On Your Discord Server With This NPM Package</h3>

## INSTALLATION
```npm install wordblocking-discord```
or
```yarn add wordblocking-discord```

## FUNCTIONS
heres the functions bellow
```
token('YourBotToken'): The Bot Token
activity('YourBotActivity'): The Bot Activity
words(): Your Words List That Gonna Be Blocked *this needs config.json so scroll down for the template*
warn('YourWarnMessage'): Bot Warn Message
dmwarn('YourDMWarnMessage'): Bot DM Warn Message
start(): This Starts The Module
uptime(): if your on replit you might need this
```

## SETUP

1. Install The Module
2. Create **index.js** file
3. Edit **index.js** file with the functions from the top, the templates below


## TEMPLATE
• index.js:
```
const app = require('wordblocking-discord')
const config = require('./config.json')

app.token(config.token)
app.activity(config.activity, config.activitytype)
app.words(config.wordlist)
app.warn(config.warntype, config.warn)
app.dmwarn(config.dm)
app.start()
app.uptime()
```
• config.json:
```
{
  "token": "YourBotToken",
  "activity": "YourBotActivity",
  "activitytype": "ActivityType",
  "wordlist": ["badword1", "badword2", "badword3"],
  "warn": "WarnMessage",
  "warntype": "WarnType",
  "dm": "DM Warn Message"
}
```


## ACTIVITY TYPES
```
• PLAYING
• WATCHING
• LISTENING
• STREAMING
```
Note: Bot Activity Type Always Need To Be Capslock


## WARN TYPES

New Update!!!

```
1 - Deleting The Word And Warning The User
2 - Only Replying To The Word
3 - Only Deleting The Word
4 - Only DMs The Author
5 - Deleting The Word And Dms The Author
```