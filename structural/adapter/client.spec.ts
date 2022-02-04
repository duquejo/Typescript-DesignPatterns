import INotification from './providers/interface/notification.interface';
import FacebookNotification from './providers/FacebookNotification';
import SlackAdapterNotfication from './providers/SlackAdapterNotification';
import SlackNotification from './providers/SlackNotification';

const providers: INotification[] = [
	new FacebookNotification(),
	new SlackAdapterNotfication(new SlackNotification()),
];

describe('NotificationService class', () => {
	it('¿Son los proveedores compatibles?', () => {
		providers.forEach((provider) => {
			/**
			 *
			 * Verificar si poseen la propiedad post y que sean una función
			 */
			expect(provider).toHaveProperty('post');
			expect(typeof provider.post).toBe('function');
		});
	});
});
