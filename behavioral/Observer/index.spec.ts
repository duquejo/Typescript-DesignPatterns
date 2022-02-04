import { CartItem } from './shop/CartItem';
import { EmailObserver } from './shop/observers/email.observer';
import { SMSObserver } from './shop/observers/sms.observer';
import { ShoppingCart } from './shop/ShoppingCart';

describe('ShoppingCart Class', () => {
	it('Caso exitoso', () => {
		const smsObserver = new SMSObserver();
		const emailObserver = new EmailObserver();
		const shoppingCart = new ShoppingCart(1, 'José Miguel');

		shoppingCart.attach(smsObserver);
		shoppingCart.attach(emailObserver);

		shoppingCart.add(new CartItem(1, 'Electric Guitar Shur', 1, 2800));

		shoppingCart.purchase();
	});
});
