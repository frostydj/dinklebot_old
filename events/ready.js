module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		// client.user.setActivity('Antsupov suck at PvP', { type: 'WATCHING' });
		// const channel = client.channels.cache.get('619146700870909964');
	},
};