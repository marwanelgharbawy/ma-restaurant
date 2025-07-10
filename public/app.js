import Meal from './models/Meal.js';
import Category from './models/Category.js';
import Choice from './models/Choice.js';
import Options from './models/Options.js';
import CartItem from './models/CartItem.js';
import Cart from './models/Cart.js';

import { pizzaCategory } from './models/Test.js';

console.log("It works again!");

// DOM manipulation to display the menu and cart
const menuContainer = document.getElementById('menu');
const cartContainer = document.getElementById('cart');
const priceElement = document.getElementById('total');

// Populate the menu->Section with the pizza category
for (const meal of pizzaCategory.meals) {
    // Create a div which contains meal name, description and price
    const mealElement = document.createElement('li');
    mealElement.textContent = `${meal.name}: ${meal.description} - $${meal.price}`;
    menuContainer.appendChild(mealElement);

    mealElement.onclick = () => {
        addToCart(meal);
    }
}

function addToCart(meal) {
    const cartItem = new CartItem(meal, [], 1);

    // Add the item element to the cart container
    const cartItemElement = document.createElement('div');
    cartItemElement.textContent = `${meal.name} - $${meal.price} x ${cartItem.quantity}`;
    cartContainer.appendChild(cartItemElement);

    let mealPrice = meal.price * cartItem.quantity;
    let currentPrice = parseFloat(priceElement.textContent.replace('$', '')) || 0;
    priceElement.textContent = `$${(currentPrice + mealPrice).toFixed(2)}`;
}

// displayCart(cart) {
//     document.createElement('div');
//     if (cart.items.length == 0) {
//         cartDiv.textContent = "The cart is empty.";
//         return;
//     }

//     console.log(`Total: $${cart.getTotal()}`);
// }