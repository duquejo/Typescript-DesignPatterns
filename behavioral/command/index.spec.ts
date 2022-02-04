import { PaymentMethodHandler } from './Payments/PaymentMethodHandler';
import { CreditCardDto } from './Payments/payment-commands/dto/CreditCard.dto';
import { PayUCommand } from './Payments/payment-commands/payU.command';

describe('PaymentMethodHandler Class', () => {
	it('Caso exitoso', () => {
		const paymentMethodHandler = new PaymentMethodHandler();

		const creditCard = new CreditCardDto(
			'american',
			'Marco Polo Ramírez',
			'xxx-xxx-xxx-xxx',
			'xxx',
			300.0
		);

		paymentMethodHandler.process(new PayUCommand(creditCard));
	});
});
