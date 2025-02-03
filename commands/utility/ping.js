const {SlashCommandBuilder, MessageFlags} = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        await interaction.deferReply({content: 'Pinging...'});
        await interaction.followUp('pong! ${interaction.client.ws.ping}ms');
    },
};