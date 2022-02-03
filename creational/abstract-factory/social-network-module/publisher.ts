import AbstractFactory from './AbstractFactory.interface';

export default class Publisher {
	constructor(private content: string) {}

	send(factory: AbstractFactory): void {
		/**
		 * Llamado al método de la factoría del conector
		 */
		const connector = factory.getConnector();

		/**
		 * Llamado al método de la factoría del publicador
		 */
		const publisher = factory.getPublisher(connector);

		connector.open();
		publisher.publish(this.content);
		connector.close();
	}
}
