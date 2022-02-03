import IPublisher from '../interfaces/publisher.interface';
import IConnector from '../interfaces/connector.interface';

export default class FacebookPublisher implements IPublisher {
	// Es opcional recibir el conector, depende de la lógica del provider
	constructor(private connector: IConnector) {}

	publish(content: string): void {
		// Lógica para publicar contenido en Facebook.
		console.log('Canal: Facebook');
		console.log(`Mensaje: ${content}`);
	}
}
