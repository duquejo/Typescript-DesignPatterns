import { Checkout } from './checkout/checkout';
import { VisaStrategy } from './checkout/strategies/visa.strategy';

const checkout = new Checkout();

let userId = 'usr-001',
	cardNumber = 'xxx-xxx-xxx-xxx',
	cvv = '123',
	amount = 2000;

describe('Strategy Pattern', () => {
	it('Successful Visa usage', () => {
		checkout.setStrategy(new VisaStrategy(cardNumber, cvv));

		const { isSuccess } = checkout.execute(userId, amount);

		expect(isSuccess).toBeTruthy();
	});
});
