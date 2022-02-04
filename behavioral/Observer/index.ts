import { CartItem } from './shop/CartItem';
import { EmailObserver } from './shop/observers/email.observer';
import { SMSObserver } from './shop/observers/sms.observer';
import { ShoppingCart } from './shop/ShoppingCart';

// Observers
const smsObserver = new SMSObserver();
const emailObserver = new EmailObserver();

// Subject
const shoppingCart = new ShoppingCart(1, 'José Miguel');

shoppingCart.attach(smsObserver);
shoppingCart.attach(emailObserver);

shoppingCart.add(new CartItem(1, 'Electric Guitar Solr', 1, 2800));
shoppingCart.add(new CartItem(2, 'Amp 60w Fender Twin Reverb', 1, 1400));
shoppingCart.add(new CartItem(3, 'Addario 009 Guitar Strings', 10, 7.5));

shoppingCart.purchase();
