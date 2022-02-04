import { ICommand } from '../interface/command.interface';
import { CreditCardDto } from './dto/CreditCard.dto';

export class MercadoPagoCommand implements ICommand {
	public readonly providerName: string = 'MercadoPago';

	constructor(private readonly creditCardDef: CreditCardDto) {}

	handle(): void {
		console.log(`${this.providerName} ha sido ejecutado...`);
		// Lógica de conexión a MercadoPago...
	}
}
