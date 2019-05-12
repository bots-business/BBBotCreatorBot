/*CMD
  command: /addcommand
  help: add new command
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Please input command name.
For example: "/start"
  ANSWER
  keyboard: 
  aliases: 🚀 new command
CMD*/

let cur_cmd = Bot.getProperty("cur_cmd");
if(!cur_cmd){ cur_cmd = {} };

if(!message){
   Bot.sendMessage("Need text only");
   return
}

cur_cmd.name = message;
Bot.runCommand("/addsecondname");

Bot.setProperty('cur_cmd', cur_cmd, 'json');
