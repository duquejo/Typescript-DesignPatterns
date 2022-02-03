import IPublisher from './interfaces/publisher.interface';
import IConnector from './interfaces/connector.interface';

/**
 * Abstract Factory
 * Fábrica de fábricas, solamente declarativa que será utilizada por las demás fábricas.
 * Abstract factory resuelve los problemas de instancia de los objetos que la utilizarían.
 *
 * @nota Se puede realizar con interfaces o con el declarativo abstract
 *
 * - Un detalle es que con abstract podemos generar propiedades y métodos, si necesitamos solamente las propiedades podemos utilizar interfaces.
 */
abstract class AbstractFactory {
	abstract getConnector(): IConnector;
	abstract getPublisher(connector: IConnector): IPublisher;
}

export default AbstractFactory;
