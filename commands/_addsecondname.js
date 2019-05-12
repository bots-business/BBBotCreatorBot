/*CMD
  command: /addsecondname
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Please input second command name.
It can be used for button.

For example "menu" or "button 1"
  ANSWER
  keyboard: 
  aliases: 
CMD*/

let cur_cmd = Bot.getProperty("cur_cmd");

cur_cmd.second_name = message;
Bot.runCommand("/addanswer");

Bot.setProperty('cur_cmd', cur_cmd, 'json');
