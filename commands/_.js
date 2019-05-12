/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(!(message.indexOf('delete') + 1)){
  return
}

let index = parseInt(message.split("delete")[1]);

let cmds = Bot.getProperty("cmds");

let cmd;
let new_cmds = [];
for(let i in cmds.commands){
  if(i==index){ continue }
  new_cmds.push(cmds.commands[i])
}

Bot.setProperty("cmds", { commands: new_cmds }, "json");

Bot.sendMessage("Command was deleted")
