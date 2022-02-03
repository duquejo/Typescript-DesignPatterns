import PaymentType from './enums/paymentType.enum';
import IPaymentMethod from './interfaces/payment-method.interface';
import MasterCard from './types/MasterCard';
import PayPal from './types/PayPal';
import Visa from './types/Visa';

/**
 * En función al parámetro que me proporcionan instanciaría un producto.
 */
export default class PaymentMethodFactory {
	public static createPaymentType(type: PaymentType): IPaymentMethod {
		switch (type) {
			case PaymentType.MasterCard:
				return new MasterCard();
			case PaymentType.PayPal:
				return new PayPal();
			case PaymentType.Visa:
				return new Visa();
			default:
				throw new Error('Método de pago inválido.');
		}
	}
}
