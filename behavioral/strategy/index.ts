import { Checkout } from './checkout/checkout';
import { MastercardStrategy } from './checkout/strategies/mastercard.strategy';
import { PayPalStrategy } from './checkout/strategies/paypal.strategy';
import { VisaStrategy } from './checkout/strategies/visa.strategy';

const checkout = new Checkout();

let userId = 'usr-001',
	useEmail = 'eduardo@kodoti.com',
	cardNumber = '000-000-000-000',
	cvv = '123',
	amount = 2000,
	paymentMethod = 'visa';

if (paymentMethod === 'paypal') {
	checkout.setStrategy(new PayPalStrategy(useEmail));
}

if (paymentMethod === 'visa') {
	checkout.setStrategy(new VisaStrategy(cardNumber, cvv));
}

if (paymentMethod === 'mastercard') {
	checkout.setStrategy(new MastercardStrategy(cardNumber, cvv));
}

checkout.execute(userId, amount);
