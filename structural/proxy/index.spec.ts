import { VideoProxy } from './src/video.proxy';
import { YoutubeApi } from './src/Youtube.api';

const proxy = new VideoProxy(new YoutubeApi());

describe('VideoProxy Class', function () {
	it('Debería verificar si fué cacheado', async () => {
		// Arrange
		const key = 'courses';

		// Act
		let result = await proxy.getPlaylist(key);
		result = await proxy.getPlaylist(key);

		// Assert
		expect(proxy['cache'][key]).toBeDefined();
	});
});
