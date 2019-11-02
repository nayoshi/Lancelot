const Discord = require('discord.js')
//example.js function is where the command execution happens.
module.exports = async function (command) {
  message.member.send("This is an example command.")
}
//`permission` attribute is where the bot will check the user's permission
//For reference, https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
module.exports.permission = ''
//`use` attribute is for future-proofing
module.exports.use = ''
//`description` attribute is to display in the `help` command
module.exports.description = 'This is an example command. it does not do anything.'