module.exports = {
	name: 'messageCreate',
	async execute(message) {
		if (message.author.bot) return;

		if (message.author.tag === 'Fire#1288') {
			message.react('🐜');
			message.react('🤏');
		}
	},
};