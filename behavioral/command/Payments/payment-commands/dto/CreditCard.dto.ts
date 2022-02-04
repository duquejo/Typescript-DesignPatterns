import { CreditCardType } from '../../types/creditCard.type';

/**
 * Información en común para todos los métodos de pago
 */
export class CreditCardDto {
	constructor(
		private readonly cardType: CreditCardType,
		private readonly cardCustomerFullName: string,
		private readonly cardNumber: string,
		private readonly cardCcv: string,
		private readonly transactionAmount: number
	) {}
}
