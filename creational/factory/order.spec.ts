import PaymentType from './enums/paymentType.enum';
import Order from './order';
import MasterCard from './types/MasterCard';
import PayPal from './types/PayPal';
import Visa from './types/Visa';

/**
 * Instancia de las órdenes
 */
let order1 = new Order(PaymentType.Visa, 100);
let order2 = new Order(PaymentType.MasterCard, 100);
let order3 = new Order(PaymentType.PayPal, 100);

/**
 * Creación de las órdenes
 */
order1.create();
order2.create();
order3.create();

/**
 * Verificación de las propiedades del objeto VISA
 */
describe('Órden - Método de pago VISA', () => {
	it('La orden debería tener por método de pago VISA', () => {
		expect(order1.paymentType instanceof Visa).toBeTruthy();
	});

	it('La comisión de la orden debería ser 5', () => {
		expect(order1.commision).toBe(5);
	});
});

/**
 * Verificación de las propiedades del objeto MasterCard
 */
describe('Órden - Método de pago MasterCard', () => {
	it('La orden debería tener por método de pago MasterCard', () => {
		expect(order2.paymentType instanceof MasterCard).toBeTruthy();
	});

	it('La comisión de la orden debería ser 4', () => {
		expect(order2.commision).toBe(4);
	});
});

/**
 * Verificación de las propiedades del objeto PayPal
 */
describe('Órden - Método de pago PayPal', () => {
	it('La orden debería tener por método de pago PayPal', () => {
		expect(order3.paymentType instanceof PayPal).toBeTruthy();
	});

	it('La comisión de la orden debería ser 6', () => {
		expect(order3.commision).toBe(6);
	});
});
