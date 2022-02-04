import { Order } from '../Order';
import { Observer } from '../pubsub-logic/observer.interface';

export class EmailObserver implements Observer {
	update(message: Order): void {
		console.log(`Email: Your order #${message.id} has been approved.`);
	}
}
