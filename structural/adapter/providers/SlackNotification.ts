/**
 * SlackNotification no es compatible con la interfaz, por lo que no
 * puede implementarse este método, debe crearse una clase extra.
 */
class SlackNotification {
	send(channelId: string, title: string, message: string): void {
		console.log(`Sending ${title} - ${message} to ${channelId} - Slack`);
	}
}

export default SlackNotification;
