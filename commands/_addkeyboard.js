/*CMD
  command: /addkeyboard
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Please input keyboard for this command.
For example: "button 1, button 2"

You can use "\ n" for new line.
  ANSWER
  keyboard: no keyboard
  aliases: 
CMD*/

let cur_cmd = Bot.getProperty("cur_cmd");

if(message!="no keyboard"){
   cur_cmd.keyboard = message;
}

let = cmds = Bot.getProperty('cmds');
if(!cmds){ cmds = { commands: [] } }

cmds.commands.push(cur_cmd);

Bot.setProperty('cmds', cmds, 'json');

Bot.sendMessage( "New command created: " + cur_cmd.name +
  "\n\n  second name: " + cur_cmd.second_name +
  "\n  keyboard: " + cur_cmd.keyboard +
  "\n\n  answer: " + cur_cmd.answer
)

Bot.runCommand("/menu");
