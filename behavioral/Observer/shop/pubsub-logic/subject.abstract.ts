import { Observer } from './observer.interface';

/**
 * Se eligió una clase abstracta que pueda mantener la lógica
 * Si se realiza através de una interfaz debe implementarse en una clase que la contenga.
 */
export abstract class Subject {
	private observers: Observer[] = [];

	/**
	 * Lógica para agregar un observador
	 */
	public attach(observer: Observer): void {
		if (!this.observers.some((obs: Observer) => obs === observer)) {
			this.observers.push(observer);
		} else {
			throw new Error('Observer has already been registered');
		}
	}

	public detach(observer: Observer): void {
		this.observers.filter((item) => item !== observer);
	}

	/**
	 * El message será notificado a todos los attached
	 */
	protected notify(message: any): void {
		this.observers.forEach((obs) => obs.update(message));
	}
}
