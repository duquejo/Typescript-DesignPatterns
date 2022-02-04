import { IDiscount } from './interfaces/discount.interface';

/**
 * Clase principal para el cálculo del descuento según precio.
 *
 * No puede implementar comportamiento, el comportamiento lo ponen los decoradores.
 *
 * Recibe el precio y lo devuelve. (Usando la base que dejó la interfaz)
 */
export class BasePrice implements IDiscount {
	calculate(input: number): number {
		// console.log(`Descuento ${this.constructor.name} aplicado.`);
		return input;
	}
}
