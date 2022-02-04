import INotification from './interface/notification.interface';

/**
 * La clase legacy a adaptar debe implementar una interfaz el cual
 * a modo de contrato, la hará someterse a ella. Dentro de la aplicación ya no
 * utilizaríamos directamente la de FB sino la interfaz.
 */
class FacebookNotification implements INotification {
	post(title: string, message: string): void {
		console.log(`Sending ${title} - ${message} - Facebook`);
	}
}

export default FacebookNotification;
