module.exports = {
	name: 'messageCreate',
	async execute(message) {
		if (message.author.bot) return;

		if (message.author.tag === 'Antsupov#8364' ||
		message.mentions.has('506071035460714496') ||
		message.content.match(/(\W| |^)((antsupov)|(ants?))(\W| |$)/gi)) {
			message.react('🐜');
			message.react('🤏');
		}
	},
};