import { PaymentResponse } from '../interfaces/payment.strategy.interface';
import { PaymentGatewayStrategy } from '../interfaces/paymentGateway.strategy.interface';

export class PayPalStrategy implements PaymentGatewayStrategy {
	constructor(public userEmail: string) {}

	execute(userId: string, amount: number): PaymentResponse {
		console.log(
			`PayPal approved the transaction for ${userId} in the amount of US$ ${amount}.`
		);
		return { isSuccess: true };
	}
}
