import { CreditCardDto } from './Payments/payment-commands/dto/CreditCard.dto';
import { EPaycoCommand } from './Payments/payment-commands/ePayco.command';
import { PayUCommand } from './Payments/payment-commands/payU.command';
import { PaymentMethodHandler } from './Payments/PaymentMethodHandler';
import { MercadoPagoCommand } from './Payments/payment-commands/mercadoPago.command';

const creditCard = new CreditCardDto(
	'visa',
	'José Miguel',
	'xxx-xxx-xxx-xxx',
	'xxx',
	300.0
);

const paymentMethodHandler = new PaymentMethodHandler();

/**
 *
 * Ejemplo #1 una sola pasarela de pago
 */
// paymentMethodHandler.process(new EPaycoCommand(creditCard));

/**
 *
 * Ejemplo #2 varias pasarelas
 * Si se efectúa con la primera, entonces procede con la siguiente hasta concretar.
 *
 * El patrón comando puede aprovecharse también para colas de ejecución.
 */
paymentMethodHandler.forceToProcess([
	new EPaycoCommand(creditCard), // Fallará, por lo que continuará con la siguiente.
	new PayUCommand(creditCard),
	new MercadoPagoCommand(creditCard),
]);
