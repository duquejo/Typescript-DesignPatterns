/**
 * Interface del comando
 * el providerName es solo para pruebas
 */
export interface ICommand {
	providerName: string;
	handle(): void;
}
