import Configuration from './Configuration';

/**
 * El constructor es privado por lo que debe realizarse mediante su inicializador
 */
let config = Configuration.getInstance();

describe('Singleton Configuration Class', () => {
	/**
	 * Prueba de inicialización
	 */
	it('El objeto no debería ser null', () => {
		expect(config).not.toBeNull();
	});

	/**
	 * Verificación de que responde a la misma instancia de clase
	 */
	it('Los objetos deberían ser iguales', () => {
		// Instancia del objeto config
		let config2 = Configuration.getInstance();
		expect(config).toEqual(config2);
	});

	/**
	 * El parámetro enviroment debería ser 'development'
	 */
	it("La propiedad development debería ser 'development'", () => {
		expect(config.enviroment).toBe('development');
	});
});
