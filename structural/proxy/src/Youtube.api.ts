import { IVideoProvider } from './video-provider.interface';

/**
 * Suponemos que es un paquete que es lento y no se puede modificar
 */
class YoutubeApi implements IVideoProvider {
	private playList: any = {
		courses: [
			'https://www.youtube.com/watch?v=K3EzQjJNJTo',
			'https://www.youtube.com/watch?v=K3EzQjJNJTo',
			'https://www.youtube.com/watch?v=K3EzQjJNJTo',
		],
	};

	async getPlaylist(code: string): Promise<string[]> {
		return new Promise((resolve, reject) => {
			/**
			 * Simula que es lento el servicio
			 */
			setTimeout(() => {
				const result = this.playList[code] || null;
				resolve(result);
			}, 3000);
		});
	}
}

export { YoutubeApi };
