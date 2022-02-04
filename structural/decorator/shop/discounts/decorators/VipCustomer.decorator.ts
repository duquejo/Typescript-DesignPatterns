import { IDiscount } from '../interfaces/discount.interface';

export class VipCustomerDecorator implements IDiscount {
	/**
	 * Recibe cualquier objeto que tenga la interfaz IDiscount
	 * Es importante definir esto, lo cual permitirá que dichas clases puedan usarse mutuamente
	 * @param decorator
	 * @importante
	 */
	constructor(private readonly decorator: IDiscount) {}

	/**
	 * Ahora si tiene un comportamiento, se especifica el descuento y
	 * se ejecuta abajo.
	 */
	private readonly discountAmount: number = 0.02;

	/**
	 * Lógica a la medida
	 */
	calculate(input: number): number {
		// console.log(`Descuento ${this.constructor.name} aplicado`);

		/**
		 * Aplicación del descuento
		 */
		input = input * (1 - this.discountAmount);

		/**
		 * Debe retornar el mismo parámetro de salida, pero con su comportamiento agregado.
		 */
		return this.decorator.calculate(input);
	}
}
