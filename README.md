<h1 align="center">
 <br>
  <a href="https://discord.gg/ymsDeHAMPY"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzwsS8JzhEGvoeDv2iaQ8F_nUpspxflcbsFhJVbm9oiJpHdK_Q2v8zzIo&s=10"></a>
  <br>
  Word Blocking Discord Bot
</h1>

<h3 align=center>Block Words On Your Discord Server With This NPM Package</h3>

## USEFULL LINKS
[Github Repo](https://github.com/FilipinoAkoShaders/wordblocking-discord/)

[Replit Project](https://replit.com/@Filipinoako/wordblocking-discord)

[Creator Youtube Channel](https://youtube.com/c/FilipinoAkoYT)

[Discord Server](https://discord.gg/ymsDeHAMPY)

## INSTALLATION
```npm install wordblocking-discord```

or

```yarn add wordblocking-discord```

## UPDATE

Setting Up Is Now Easier

You Can Now Custom Uptime Port

## SETUP

1. Install The Module
2. Create **index.js** file
3. Copy This Code In **index.js** file
```js
const app = require('wordblocking-discord')

app.wordblocker({
   bot_token: 'Your Bot Token Here',
   bot_activity: 'Your Bot Activity Here',
   bot_activity_type: 'Bot Activity Type Here',
   word_list: ["words here", "Words Here"], // any words available
   word_warn: 'Your Word Warn Here',
   word_warn_type: Warn Type Here,
   uptime_port: Your Uptime Port Here
})
```
4. Fill Out The Needed Values
5. Now Run ```node index.js``` on the terminal or console
Enjoy The Package! :)

## ACTIVITY TYPES
```
• PLAYING
• WATCHING
• LISTENING
• STREAMING
```
Note: Bot Activity Type Always Need To Be Capslock

## WARN TYPES
```
1 - Deleting The Word And Warning The User
2 - Only Replying To The Word
3 - Only Deleting The Word
4 - Only DMs The Author
5 - Deleting The Word And Dms The Author
```
