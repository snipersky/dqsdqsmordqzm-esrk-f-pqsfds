const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`^bc | By snipersky`,"http://twitch.tv/SNIPERSKY")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
    	 
  client.on("message", (message) => {//           
		    if (message.channel.type === "dm") {     
		if (message.author.id === client.user.id) return;      // 
		let SNIPERSKY = new Discord.RichEmbed()   
			    .setTimestamp()   
			    .setTitle("Direct Message To The Bot")      
			    .addField(`Sent By:`, `<@${message.author.id}>`)    
			    .setColor("RANDOM")     // 
			    .setThumbnail(message.author.displayAvatarURL)    
			    .addField(`Message: `, `\n\n\`\`\`${message.content}\`\`\``)    // 
			    .setFooter(` Robot Messages |  Logs`)   
			client.users.get("302027636001996810").send(SNIPERSKY)   
		    }
	});

client.on('message', message => {
    if (message.content.split(' ')[0] == '_bc')
       message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;


           member.send("   " + message.content.substr(3));
                                                      message.delete();

                                                    });

                                                  });
   client.on("message", message => {
       var prefix = "_";
 
             var args = message.content.substring(prefix.length).split(" ");
                if (message.content.startsWith(prefix + "b")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;

                          if (!args[1]) {

                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription(":white_check_mark: | تم ارسال رسالة لا يوجد فيها شيء")
                                       .setColor("#FF00FF")
                                          message.channel.sendEmbed(embed3);

                                        } else {


                                           let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | تم ارسال الرساله للجميع ..')
                                                                .setColor("#99999")

                                                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});
client.login(process.env.BOT_TOKEN);
