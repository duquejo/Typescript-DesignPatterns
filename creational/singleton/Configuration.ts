/**
 * SINGLETON
 * Hace referencia a sí mismo, para solucionar el problema de la instancia.
 */
import config from './config.json';

class Configuration {
	/**
	 * Referencia a sí mismo
	 * @importante
	 */
	private static instance: Configuration;

	/**
	 * EXTRA ( No hace parte del singleton )
	 * - Deben ponerse privados para no ser accesibles y deben ser estáticos para preservarse.
	 * - En caso de poner estas variables privadas, será necesario definir getters.
	 */
	private static _connectionString: string;
	private static _enviroment: string;
	private static _apiUrl: string;

	/**
	 * No podemos permitir que se realicen nuevas instancias, no se pueden crear objetos del mismo.
	 * @importante
	 */
	private constructor() {}

	/**
	 * Método que se encargará de la única inicialización
	 * @importante
	 */
	private static initialize(): void {
		this._connectionString = config.connectionString;
		this._enviroment = config.enviroment;
		this._apiUrl = config.apiUrl;
	}

	/**
	 * Es costumbre en patrones singleton visualizar esta propiedad
	 * @importante
	 */
	public static getInstance(): Configuration {
		// Verificar si está instanciado.
		if (!this.instance) {
			this.initialize();
			this.instance = new Configuration();
		}
		return this.instance;
	}

	/**
	 * Getters de parámetros de configuración
	 */
	get connectionString(): string {
		return Configuration._connectionString;
	}
	get enviroment(): string {
		return Configuration._enviroment;
	}
	get apiUrl(): string {
		return Configuration._apiUrl;
	}
}

export default Configuration;
