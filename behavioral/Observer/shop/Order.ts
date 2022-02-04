import { CartItem } from './CartItem';

export class Order {
	public readonly id: string;

	private orderNumber: number = 1;

	constructor(
		public readonly userId: number,
		public readonly userFirstName: string,
		public readonly items: CartItem[]
	) {
		const now = new Date();
		this.id = `${now.getFullYear()}-${(now.getMonth() + 1)
			.toString()
			.padStart(2, '0')}${now
			.getDate()
			.toString()
			.padStart(2, '0')}${this.orderNumber.toString().padStart(4, '0')}`;
		this.orderNumber++;
	}
}
