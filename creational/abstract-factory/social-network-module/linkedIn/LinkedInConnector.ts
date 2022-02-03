import IConnector from '../interfaces/connector.interface';

/**
 * Fábrica connector que pertenece a LinkedIn
 * Note que tiene la estructura ideal para una fábrica que implementa una interfaz abstracta.
 */
export default class LinkedInConnector implements IConnector {
	open(): void {
		// Lógica para realizar una conexión válida
	}
	close(): void {
		// Lógica para realizar una desconexión válida
	}
}
