/*CMD
  command: /addanswer
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Please input answer for command. For example: "Hello, user!"
  keyboard: 
  aliases: 
CMD*/

let cur_cmd = Bot.getProperty("cur_cmd");

cur_cmd.answer = message;
Bot.runCommand("/addkeyboard");

Bot.setProperty('cur_cmd', cur_cmd, 'json');
