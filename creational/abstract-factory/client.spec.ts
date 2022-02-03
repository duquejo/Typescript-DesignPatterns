import FacebookFactory from './social-network-module/facebook/FacebookFactory';
import LinkedInFactory from './social-network-module/linkedIn/LinkedInFactory';
import SlackFactory from './social-network-module/slack/SlackFactory';
import FacebookConnector from './social-network-module/facebook/FacebookConnector';
import FacebookPublisher from './social-network-module/facebook/FacebookPublisher';
import LinkedInConnector from './social-network-module/linkedIn/LinkedInConnector';
import LinkedInPublisher from './social-network-module/linkedIn/LinkedInPublisher';
import SlackConnector from './social-network-module/slack/SlackConnector';
import SlackPublisher from './social-network-module/slack/SlackPublisher';
import Publisher from './social-network-module/publisher';

/**
 *
 * Corroborar que cada fábrica usada sea la esperada
 *  - Esto es más que todo para mitigar errores de implementación de interfaces.
 */
const facebookFactory = new FacebookFactory();
const linkedInFactory = new LinkedInFactory();
const slackFactory = new SlackFactory();

describe('Facebook Publisher', () => {
	it('Debería ser un conector de Facebook', () => {
		expect(
			facebookFactory.getConnector() instanceof FacebookConnector
		).toBeTruthy();
	});

	it('Debería ser un publicador de Facebook', () => {
		const connector = facebookFactory.getConnector();
		expect(
			facebookFactory.getPublisher(connector) instanceof FacebookPublisher
		).toBeTruthy();
	});
});

describe('LinkedIn Publisher', () => {
	it('Debería ser un conector de LinkedIn', () => {
		expect(
			linkedInFactory.getConnector() instanceof LinkedInConnector
		).toBeTruthy();
	});

	it('Debería ser un publicador de LinkedIn', () => {
		const connector = linkedInFactory.getConnector();
		expect(
			linkedInFactory.getPublisher(connector) instanceof LinkedInPublisher
		).toBeTruthy();
	});
});

describe('Slack Publisher', () => {
	it('Debería ser un conector de Slack', () => {
		expect(slackFactory.getConnector() instanceof SlackConnector).toBeTruthy();
	});

	it('Debería ser un publicador de Slack', () => {
		const connector = slackFactory.getConnector();
		expect(
			slackFactory.getPublisher(connector) instanceof SlackPublisher
		).toBeTruthy();
	});
});
