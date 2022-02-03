import Publisher from './social-network-module/publisher';
import FacebookFactory from './social-network-module/facebook/FacebookFactory';
import LinkedInFactory from './social-network-module/linkedIn/LinkedInFactory';
import SlackFactory from './social-network-module/slack/SlackFactory';

/**
 *
 * Ejemplo de uso (NO Práctico ❌)
 * - Debe hacerse por cada red social esta implementación, lo cual lo hace complicado y difícil de mantener.
 *
 */
// const _facebookFactory = new FacebookFactory();

// const connector = _facebookFactory.getConnector();
// const publisher = _facebookFactory.getPublisher(connector);

// connector.open();
// publisher.publish("Hello Facebook");
// connector.close();

/**
 *
 * Ejemplo de uso (Como debería ser ✔️)
 */

/**
 *
 * Mensaje de prueba
 * @param string argumento de la clase publicadora
 */
const message = `¡Este es un mensaje para todas mis redes sociales! ✉️`;

/**
 *
 * Llamado a la clase que realiza la instancia de la factoría abstracta.
 */
const publisher = new Publisher(message);

publisher.send(new FacebookFactory());
publisher.send(new LinkedInFactory());
publisher.send(new SlackFactory());
