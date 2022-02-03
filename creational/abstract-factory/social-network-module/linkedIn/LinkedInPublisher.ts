import IPublisher from '../interfaces/publisher.interface';
import IConnector from '../interfaces/connector.interface';

export default class LinkedInPublisher implements IPublisher {
	// Es opcional recibir el conector, depende de la lógica del provider
	constructor(private connector: IConnector) {}

	publish(content: string): void {
		// Lógica para publicar contenido en LinkedIn.
		console.log('Canal: LinkedIn');
		console.log(`Mensaje: ${content}`);
	}
}
