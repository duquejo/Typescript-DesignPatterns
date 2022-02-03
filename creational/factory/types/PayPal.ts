import IPaymentMethod from '../interfaces/payment-method.interface';

export default class PayPal implements IPaymentMethod {
	/**
	 * Getter implementado para la clase PayPal
	 */
	get commision(): number {
		return 0.06;
	}
}
