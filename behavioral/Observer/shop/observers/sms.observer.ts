import { Order } from '../Order';
import { Observer } from '../pubsub-logic/observer.interface';

/**
 * Comparten el mismo mensaje
 */
export class SMSObserver implements Observer {
	update(message: Order): void {
		const total = message.items
			.map((item: any) => item.quantity * item.unitPrice)
			.reduce((a: any, b: any) => a + b);
		console.log(`SMS: Your order #${message.id} has been approved.`);
	}
}
