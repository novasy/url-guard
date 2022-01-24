// selam ben novasy discord.gg/bot
const request = require('request');
const { Client } = require('discord.js');
const client = new Client();
const config = require("./config.json")

// selam ben novasy discord.gg/bot

client.on("ready", async  => {// selam ben novasy discord.gg/bot

      let restart = client.channels.cache.get(config.urllog)// selam ben novasy discord.gg/bot

        let botVoiceChannel = client.channels.cache.get(config.voicekanal);
            if (botVoiceChannel) botVoiceChannel.join().catch(err => console.error("Bot ses kanalına bağlanamadı!"));
                client.user.setPresence({ activity: { name: config.durum }, status: "dnd" })// selam ben novasy discord.gg/bot

                    restart.send(`\`\`\`${client.user.username} yeniden başlatıldı.\n\nKorunan URL: ${config.vanity}\`\`\``)
                        });
// selam ben novasy discord.gg/bot
client.on('guildUpdate', async (oldGuild, newGuild) => {// selam ben novasy discord.gg/bot

    if (oldGuild.vanityURLCode === newGuild.vanityURLCode) return;
        let suclupic = await newGuild.fetchAuditLogs({
            type: 'GUILD_UPDATE'
                }).then(audit => audit.entries.first());
                    if (!suclupic.executor || suclupic.executor.id === client.user.id || !newGuild.members.cache.get(suclupic.executor.id).bannable) return;
                            let channel = client.channels.cache.get(config.urllog);
                                if (channel) channel.send(`@everyone\n${suclupic.executor} adlı kişi url'yi değiştirmeye çalıştığı için uzaklaştırıldı url \`${oldGuild.vanityURLCode}\` haline geri getirildi.`)// selam ben novasy discord.gg/bot

                                    if (!channel) return
                                        newGuild.members.ban(suclupic.executor.id, {
                                            reason: `${suclupic.executor.tag} url'yi değiştirdi ama novasy'i unuttu :D `
                                                });// selam ben novasy discord.gg/bot

// selam ben novasy discord.gg/bot

const settings = {
    url: `https://discord.com/api/v6/guilds/${newGuild.id}/vanity-url`,
        body: { code: config.vanity },
            json: true,
                method: 'PATCH',
                    headers: { "Authorization": `Bot ${config.token}` }
                        };
// selam ben novasy discord.gg/bot

request(settings, (err, res, body) => {
    if (err) {
        return console.log(err);
            }
                });
                    });
// selam ben novasy discord.gg/bot

client.login(config.token)
