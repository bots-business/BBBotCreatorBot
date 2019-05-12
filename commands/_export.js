/*CMD
  command: /export
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Please input your login (email) in Bots.Business app.

New bot with name "BBTemplateBot" will be created in your account.
  ANSWER
  keyboard: 
  aliases: export bot to my bb account
CMD*/

function validateEmail(email){
    var re = /^\S+@\S+$/;
    return re.test(String(email).toLowerCase());
}

let email = message;
if(!validateEmail(email)){
   Bot.sendMessage("Please send correct exist email address.\nFor examle: annet@gmail.com.");
   return;
}

let cmds = Bot.getProperty("cmds");

BBAdmin.installBot(
  { email: email,
    bot_id: 21320, // see Bot ID in the app -> Bots -> Bot
    bot_properties: [ { name: "commands", value: cmds, type: "json" } ]
  }
)

Bot.sendMessage("Bot exported to your BB account. Please check your email if you new user.")
