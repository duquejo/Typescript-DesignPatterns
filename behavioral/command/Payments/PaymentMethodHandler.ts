import { ICommand } from './interface/command.interface';

class PaymentMethodHandler {
	process(command: ICommand): void {
		console.log('Payment method handler has been started.');
		command.handle();
	}

	forceToProcess(commands: ICommand[]): void {
		for (const command of commands) {
			try {
				/**
				 * Caso extra (lógica adicional)
				 * Si alguna de las pasarelas falla, se utiliza como medida adicional los otros
				 */
				if (command.providerName === 'EPayco') {
					throw new Error(
						`${command.providerName} rechazó la tarjeta de crédito por fraude.`
					);
				}
				command.handle();
				break;
			} catch (error: any) {
				console.warn(`\tError: ${error.message}`);
			}
		}
	}
}

export { PaymentMethodHandler };
