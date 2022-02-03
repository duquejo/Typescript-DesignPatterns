import AbstractFactory from '../AbstractFactory.interface';
import LinkedInConnector from './LinkedInConnector';
import IConnector from '../interfaces/connector.interface';
import LinkedInPublisher from './LinkedInPublisher';

/**
 * Implementa la fábrica abstracta
 */
class LinkedInFactory implements AbstractFactory {
	getConnector() {
		return new LinkedInConnector();
	}
	getPublisher(connector: IConnector) {
		return new LinkedInPublisher(connector);
	}
}

export default LinkedInFactory;
