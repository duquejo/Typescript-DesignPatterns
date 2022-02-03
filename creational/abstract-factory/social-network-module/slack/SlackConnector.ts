import IConnector from '../interfaces/connector.interface';

/**
 * Fábrica connector que pertenece a Slack
 * Note que tiene la estructura ideal para una fábrica que implementa una interfaz abstracta.
 */
export default class SlackConnector implements IConnector {
	open(): void {
		// Lógica para realizar una conexión válida
	}
	close(): void {
		// Lógica para realizar una desconexión válida
	}
}
