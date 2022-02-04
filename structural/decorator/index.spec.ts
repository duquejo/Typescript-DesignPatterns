import { BasePrice } from './shop/discounts/BasePrice';
import { SpecialPriceDecorator } from './shop/discounts/decorators/SpecialPrice.decorator';
import { VipCustomerDecorator } from './shop/discounts/decorators/VipCustomer.decorator';
import { Product } from './shop/product';

describe('Producto', () => {
	it('Base del product no debería tener precio especial calculado', () => {
		// Arrange
		const product = new Product('Guitarra Solr Classic', 2500);
		let specialPrice = new BasePrice();

		// Act
		product.setSpecialPrice(specialPrice.calculate(product.price));

		// Assert
		expect(product.specialPrice).toBe(0);
	});

	it('Descuento aplicado al base product', () => {
		// Arrange
		const product = new Product('Guitarra Solr Classic', 2500);
		let specialPrice = new BasePrice();

		// Act
		specialPrice = new SpecialPriceDecorator(specialPrice);
		product.setSpecialPrice(specialPrice.calculate(product.price));

		// Assert
		expect(product.price).toBeGreaterThan(product.specialPrice);
	});

	it('Descuento a usuario VIP', () => {
		// Arrange
		const product = new Product('Guitarra Solr Classic', 2500);
		let specialPrice = new BasePrice();

		// Act
		specialPrice = new VipCustomerDecorator(specialPrice);
		product.setSpecialPrice(specialPrice.calculate(product.price));

		// Assert
		expect(product.price).toBeGreaterThan(product.specialPrice);
	});

	it('Descuento especial y descuento usuario VIP', () => {
		// Arrange
		const product = new Product('Guitarra Solr Classic', 2500);
		let specialPrice = new BasePrice();

		// Act
		specialPrice = new SpecialPriceDecorator(specialPrice);
		specialPrice = new VipCustomerDecorator(specialPrice);
		product.setSpecialPrice(specialPrice.calculate(product.price));

		// Assert
		expect(product.price).toBeGreaterThan(product.specialPrice);
	});
});
