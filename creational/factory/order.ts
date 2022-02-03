import PaymentType from './enums/paymentType.enum';
import IPaymentMethod from './interfaces/payment-method.interface';
import PaymentMethodFactory from './PaymentMethodFactory';

/**
 *
 * Factory
 * No me interesa como se comporta, sólamente la implementación.
 *
 * 1. Agregar interface que será la que implementarán todos los hijos.
 * 2. Agregar 'implements' a quién las vaya a usar y utilizar los obligatorios
 * 3. Crearía una clase dedicada que sería la fábrica de nuevas instancias de clases según un tipo en específico.
 * 	- Se recomienda utilizar una variable enumerada para tener puntualmente los tipos de instancias que deseo crear.
 */

class Order {
	paymentType?: IPaymentMethod;
	commision: number = 0;

	constructor(private type: PaymentType, public amount: number) {}

	create(): void {
		/**
		 * Se delega la responsabilidad principal de la creación a la clase Factory.
		 */
		this.paymentType = PaymentMethodFactory.createPaymentType(this.type);
		/**
		 * Puedo usar sus propiedades
		 */
		this.commision = this.paymentType.commision * this.amount;
		// ...
	}
}

export default Order;
