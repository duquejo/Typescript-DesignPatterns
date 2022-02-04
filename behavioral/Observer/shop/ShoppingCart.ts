import { Subject } from './pubsub-logic/subject.abstract';
import { CartItem } from './CartItem';
import { Order } from './Order';

export class ShoppingCart extends Subject {
	/**
	 * Clase que hereda características de Subject
	 * @param userId
	 * @param userFirstName
	 */
	constructor(private userId: number, private userFirstName: string) {
		super();
	}

	private readonly items: CartItem[] = [];

	add(item: CartItem) {
		const cartItem = this.items.find((x) => x.id == item.id);

		if (cartItem) {
			throw new Error(
				'The product has already been added to the shopping cart.'
			);
		} else {
			this.items.push(item);
		}
	}

	purchase() {
		// Business logic...
		const order = new Order(this.userId, this.userFirstName, this.items);
		this.notify(order);
	}
}
