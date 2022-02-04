import { ICommand } from '../interface/command.interface';
import { CreditCardDto } from './dto/CreditCard.dto';

export class EPaycoCommand implements ICommand {
	public readonly providerName: string = 'EPayco';

	constructor(private readonly creditCardDef: CreditCardDto) {}

	handle(): void {
		console.log(`${this.providerName} ha sido ejecutado...`);
		// Lógica de conexión a EPayco...
	}
}
