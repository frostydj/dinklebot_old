module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		if (interaction.isCommand() || interaction.isUserContextMenu()) {
			command_handler(interaction);
		} else if (interaction.isButton()) {
			button_handler(interaction);
		} else if (interaction.isSelectMenu()) {
			select_handler(interaction);
		} else if (interaction.isAutocomplete()) {
			autocomplete_handler(interaction);
		} else if (interaction.isModalSubmit()) {
			modal_handler(interaction);
		} else {
			return;
		}
	},
};

async function command_handler(interaction) {
	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered command: ${interaction.commandName}.`);
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
}

async function button_handler(interaction) {
	console.log(interaction);
}

async function select_handler(interaction) {
	if (interaction.customId === 'select') {
		await interaction.update({ content: 'Something was selected!', components: [] });
	}
}

async function autocomplete_handler(interaction) {
	const focusedValue = interaction.options.getFocused();
	const choices = ['faq', 'install', 'collection', 'promise', 'debug'];
	const filtered = choices.filter(choice => choice.startsWith(focusedValue));
	await interaction.respond(
		filtered.map(choice => ({ name: choice, value: choice })),
	);
}

async function modal_handler(interaction) {
	if (interaction.customId === 'myModal') {
		await interaction.reply({ content: 'Your submission was recieved successfully!' });
	}
}

