const { ContextMenuCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new ContextMenuCommandBuilder()
		.setName('echo')
		.setType(2),
	async execute(interaction) {
		const name = interaction.targetUser.username;
		console.log(name);
		interaction.reply({ content: 'Action Successful', ephemeral: true });
	},
};