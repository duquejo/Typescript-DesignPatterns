import { IVideoProvider } from './video-provider.interface';

/**
 * Este intermediario generará comportamiento adicional al original
 * la clave está en usar la misma interfaz.
 */
class VideoProxy implements IVideoProvider {
	private cache: any = {};

	constructor(private readonly provider: IVideoProvider) {}

	async getPlaylist(code: string): Promise<string[]> {
		let result = this.cache[code];

		if (!result) {
			result = await this.provider.getPlaylist(code);

			/**
			 * Guardar en caché
			 */
			this.cache[code] = result;
		}

		return result;
	}
}

export { VideoProxy };
