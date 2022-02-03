import IPaymentMethod from '../interfaces/payment-method.interface';

export default class MasterCard implements IPaymentMethod {
	/**
	 * Getter implementado para la clase MasterCard
	 */
	get commision(): number {
		return 0.04;
	}
}
