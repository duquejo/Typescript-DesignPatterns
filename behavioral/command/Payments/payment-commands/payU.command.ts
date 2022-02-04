import { ICommand } from '../interface/command.interface';
import { CreditCardDto } from './dto/CreditCard.dto';

export class PayUCommand implements ICommand {
	public readonly providerName: string = 'PayU';

	constructor(private readonly creditCardDef: CreditCardDto) {}

	handle(): void {
		console.log(`${this.providerName} ha sido ejecutado...`);
		// Lógica de conexión a PayU...
	}
}
