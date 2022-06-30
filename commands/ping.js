const { SlashCommandBuilder } = require('@discordjs/builders');
// const wait = require('node:timers/promises').setTimeout;
const { MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require('discord.js');
// const { Modal, TextInputComponent } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Primary')
					.setStyle('PRIMARY'),
			);

		const select = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.setMinValues(2)
					.setMaxValues(3)
					.addOptions([
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
						{
							label: 'I am also an option',
							description: 'This is a description as well',
							value: 'third_option',
						},
					]),
			);

		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Some title')
			.setURL('https://discord.js.org')
			.setDescription('Some description here');

		// const modal = new Modal()
		// 	.setCustomId('myModal')
		// 	.setTitle('My Modal');

		// const favoriteColorInput = new TextInputComponent()
		// 	.setCustomId('favoriteColorInput')
		// 	.setLabel('What\'s your favorite color?')
		// 	.setStyle('SHORT');
		// const hobbiesInput = new TextInputComponent()
		// 	.setCustomId('hobbiesInput')
		// 	.setLabel('What\'s some of your favorite hobbies?')
		// 	.setStyle('PARAGRAPH');

		// const firstActionRow = new MessageActionRow().addComponents(favoriteColorInput);
		// const secondActionRow = new MessageActionRow().addComponents(hobbiesInput);

		// modal.addComponents(firstActionRow, secondActionRow);
		// await interaction.showModal(modal);

		await interaction.reply({ content: 'Pong!', ephemeral: true, embeds: [embed], components: [row, select] });
	},
};