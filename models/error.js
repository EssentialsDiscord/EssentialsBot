const { MessageEmbed } = require("discord.js")
const emoji = require('../emojis.json');
/** 
 * Easy to send errors because im lazy to do the same things :p
 * @param {String} text - Message which is need to send
 * @param {TextChannel} channel - A Channel to send error
 */
module.exports = async (text, channel) => {
    let embed = new MessageEmbed()
    .setColor(`RED`)
    .setDescription(emoji.normal.cross + ` | ` + text);
    await channel.send({embeds: [embed]})
}
