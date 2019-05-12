/*CMD
  command: /commands
  help: list of all current commands
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: all commands
CMD*/

let cmds = Bot.getProperty("cmds");

let cmd;
for(let i in cmds.commands){
  cmd = cmds.commands[i];

  Bot.sendMessage( "New command created: " + cmd.name +
    "\n\n  second name: " + cmd.second_name +
    "\n  keyboard: " + cmd.keyboard +
    "\n\n  answer: " + cmd.answer +
    "\n\n /delete" + i
  )
}
