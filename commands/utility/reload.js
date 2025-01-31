const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reload')
		.setDescription('Reloads a command.')
		.addStringOption(option =>
			option.setName('command')
				.setDescription('The command to reload.')
				.setRequired(true)),
	async execute(interaction) {
		const commandName = interaction.options.getString('command');
        const command = interaction.client.commands.get(commandName);

        if (!command) {
            return interaction.reply({ content: `There is no command with the name \`${commandName}\`!`});
        }
	},
};