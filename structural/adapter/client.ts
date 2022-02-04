import FacebookNotification from './providers/FacebookNotification';
import SlackAdapterNotfication from './providers/SlackAdapterNotification';
import SlackNotification from './providers/SlackNotification';
import NotificationService from './services/notification.service';
import INotification from './providers/interface/notification.interface';

/**
 *
 * Definición del arreglo de proveedores.
 * Incluimos el adapter y la instancia del adaptado.
 * @importante
 */
const providers: INotification[] = [
	new FacebookNotification(),
	new SlackAdapterNotfication(new SlackNotification()),
];

/**
 *
 * Se emplea el servicio enviando los respectivos proveedores y se hace uso del método
 * respectivo.
 */
const title = '¡Nuevo curso!';
const message =
	'Con el cupón ENERO2021 obtendrás un 25% en todos los cursos, cupos limitados.';

const notificationService = new NotificationService(providers);
notificationService.post(title, message);
