/**
 * Interfaz contrato que deberá cumplirse para todas las clases hijas
 */
export default interface INotification {
	post(title: string, message: string): void;
}
