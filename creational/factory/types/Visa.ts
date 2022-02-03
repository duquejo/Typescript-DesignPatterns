import IPaymentMethod from '../interfaces/payment-method.interface';

export default class Visa implements IPaymentMethod {
	/**
	 * Getter implementado para la clase Visa
	 */
	get commision(): number {
		return 0.05;
	}
}
