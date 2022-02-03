import AbstractFactory from '../AbstractFactory.interface';
import IConnector from '../interfaces/connector.interface';
import FacebookConnector from './FacebookConnector';
import FacebookPublisher from './FacebookPublisher';

/**
 * Implementa la fábrica abstracta
 */
class FacebookFactory implements AbstractFactory {
	getConnector() {
		return new FacebookConnector();
	}
	getPublisher(connector: IConnector) {
		return new FacebookPublisher(connector);
	}
}

export default FacebookFactory;
