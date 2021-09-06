## ❔ What is EasyStart?
EasyStart is a package that can easily create discord bot.
## ⬇ How to install EasyStart?
1. Download and install [Node.JS v16](https://nodejs.org/en/download/)
2. Download EasyStart source [code](https://github.com/DaneeSkripter/EasyStart-Example)
3. Go to Discord Developer Portal and create application
4. In left click on bot tab and click Add Bot
6. Click on copy button to copy token
7. Enable PRESENCE and SERVER MEMBER intents
8. Create a [MongoDB database](https://www.youtube.com/watch?v=8no3SktqagY), follow the tutorial until 2:25, then click **connect**.
9. Click **Connect your application** and select version **2.2.12 or later**
10. In database link replace ```<password>``` with your password
11. Go to the folder where you downloaded source code
12. Open index.js and paste token, database link and type prefix
13. At top line of file explorer type cmd and press enter
14. In cmd type these commands: 
- npm i dis-easystart - Install EasyStart package
- node index.js - Start your bot (type this command every time when you want to start bot)

If in cmd shows ```The Bot is ready!``` your bot is online

15. Go to back to Discord Developer Portal and choose your bot
16. In left click on General Information and copy id
17. In this link replace ID with your bot ID: https://discord.com/oauth2/authorize?client_id=ID&permissions=8589934591&scope=applications.commands%20bot and now you can invite your bot in your server

*Slash commands will load in hour*
