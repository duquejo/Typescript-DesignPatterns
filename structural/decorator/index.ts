import { Customer } from './shop/customer';
import { BasePrice } from './shop/discounts/BasePrice';
import { SpecialPriceDecorator } from './shop/discounts/decorators/SpecialPrice.decorator';
import { VipCustomerDecorator } from './shop/discounts/decorators/VipCustomer.decorator';
import { Product } from './shop/product';

/**
 * Creación de cliente
 */
const customer = new Customer('José Miguel', true, 'VIP');

/**
 * Creación de un producto
 */
const product = new Product('Guitarra fender squier', 2500);

/**
 * Clase plana, sin modificaciones o lógicas adicionales.
 */
let discount = new BasePrice();

/**
 * Se trabaja con el resultado de los pasos anteriores.
 * @importante el último decorador será el primero en ejecutarse y así sucesivamente, ya que trabaja en una estructura pila
 */
if (customer.isFirstBuy) {
	discount = new SpecialPriceDecorator(discount);
}

if (customer.type === 'VIP') {
	discount = new VipCustomerDecorator(discount);
}

product.setSpecialPrice(discount.calculate(product.price));

console.log(product);
