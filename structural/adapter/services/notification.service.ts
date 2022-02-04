import INotification from '../providers/interface/notification.interface';
/**
 * Trabaja de manera polifórmica gracias a la inyección de la interfaz.
 */
class NotificationService {
	/**
	 * Utiliza todos los providers actuales, no en específico, sino con su abstracción
	 * a través de la interfaz.
	 */
	constructor(private providers: INotification[]) {}

	/**
	 * Utiliza el método de la interfaz.
	 */
	post(title: string, message: string): void {
		this.providers.forEach((p) => {
			p.post(title, message);
		});
	}
}
export default NotificationService;
