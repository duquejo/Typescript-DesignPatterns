import SlackNotification from './SlackNotification';
import INotification from './interface/notification.interface';

/**
 * Clase adaptada para Slack. Esto para que pueda utilizarse la interfaz general de notificaciones
 * Funciona a modo de Wrapper.
 */
class SlackAdapterNotfication implements INotification {
	/**
	 * Inyecta el nuevo servicio
	 * @importante
	 */
	constructor(private slackNotification: SlackNotification) {}

	/**
	 * Sección adaptada
	 * @importante
	 */
	public post(title: string, message: string): void {
		this.slackNotification.send('general', title, message);
	}
}

export default SlackAdapterNotfication;
