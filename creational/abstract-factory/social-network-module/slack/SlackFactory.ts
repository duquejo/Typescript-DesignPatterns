import AbstractFactory from '../AbstractFactory.interface';
import SlackConnector from './SlackConnector';
import IConnector from '../interfaces/connector.interface';
import SlackPublisher from './SlackPublisher';

/**
 * Implementa la fábrica abstracta
 */
class SlackFactory implements AbstractFactory {
	getConnector() {
		return new SlackConnector();
	}
	getPublisher(connector: IConnector) {
		return new SlackPublisher(connector);
	}
}

export default SlackFactory;
