const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('autocomplete')
		.setDescription('Test command to show how autocomplete should be set up')
		.addStringOption(option =>
			option
				.setName('name')
				.setDescription('Name of something')
				.setAutocomplete(true)),
	async execute(interaction) {
		console.log(interaction);
	},
};