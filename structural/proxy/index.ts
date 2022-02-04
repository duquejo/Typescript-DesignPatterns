import { VideoProxy } from './src/video.proxy';
import { YoutubeApi } from './src/Youtube.api';

const proxy = new VideoProxy(new YoutubeApi());

(async () => {
	// Primera vez
	await getPlaylist();

	// Segunda vez (desde caché)
	await getPlaylist();

	// Veces siguientes (desde caché)
	await getPlaylist();
	await getPlaylist();
	await getPlaylist();
})();

async function getPlaylist(): Promise<void> {
	const startDate = new Date();
	await proxy.getPlaylist('courses');

	const endDate = new Date();
	console.log(
		`Proceso completado en ${
			(endDate.getTime() - startDate.getTime()) / 1000
		} segundos.`
	);
}
