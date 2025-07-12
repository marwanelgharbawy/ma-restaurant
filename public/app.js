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

const cart = new Cart();

// Populate the menu->Section with the pizza category
for (const meal of pizzaCategory.meals) {
    // Create a div which will be a container for the base meal element and the choices element
    const mealContainer = document.createElement('div');

    // Create a div which contains meal name, description and BASE price
    const mealElement = document.createElement('div');
    mealElement.textContent = `${meal.name}: ${meal.description} - $${meal.price}`;

    // Create a button which will add the meal to the cart
    const addMealButon = document.createElement('button');
    addMealButon.textContent = "Add to Cart";
    mealElement.appendChild(addMealButon);

    addMealButon.onclick = () => {
        // Get all choices within element
        const choiceInputs = choicesElement.querySelectorAll('input');
        console.log("Choice inputs:", choiceInputs);
        const selectedChoices = [];
        for (const choiceInput of choiceInputs) {
            if (choiceInput.checked) {
                // Get the name from the label element next to the input
                const choiceLabel = choiceInput.nextElementSibling.textContent;
                const choice = meal.options.choices.find(c => c.name === choiceLabel);
                if (choice) {
                    selectedChoices.push(choice);
                }
            }
        }
        console.log("Selected choices:", selectedChoices);
        const cartItem = new CartItem(meal, selectedChoices, 1);
        cart.addItem(cartItem);
        renderCart();
    }

    mealContainer.appendChild(mealElement);

    // Display choices
    const choicesElement = document.createElement('div'); // Group of choices
    for (const choice of meal.options.choices) {
        const choiceContainer = document.createElement('div'); // Container for each choice

        // Create a "choice selector" element
        const choiceSelector = document.createElement('input'); // For each choice
        if (meal.options.isRadio) {
            choiceSelector.type = 'radio';
        } else {
            choiceSelector.type = 'checkbox';
        }
        choiceContainer.appendChild(choiceSelector);

        // Create label element for the choice
        const choiceLabel = document.createElement('label');
        choiceLabel.textContent = choice.name;
        choiceContainer.appendChild(choiceLabel);

        choicesElement.appendChild(choiceContainer);
    }
    mealElement.appendChild(choicesElement);

    menuContainer.appendChild(mealContainer);
}

function renderCart() {
    // Clear the cart container
    cartContainer.innerHTML = '';

    if (cart.cartItems == 0) {
        cartContainer.textContent = "Your cart is empty.";
    } else {
        for (const item of cart.cartItems) {
            const cartItemElement = document.createElement('div');
            cartItemElement.textContent = `${item.product.name} - $${item.product.price} x ${item.quantity}`;
            cartContainer.appendChild(cartItemElement);
        }
        priceElement.textContent = `$${cart.totalPrice.toFixed(2)}`;
    }
}

// We don't need that much DOM manipulation, the Cart and CartItem classes handle everything
// function addToCart(meal) {
//     const cartItem = new CartItem(meal, [], 1);

//     // Add the item element to the cart container
//     const cartItemElement = document.createElement('div');
//     cartItemElement.textContent = `${meal.name} - $${meal.price} x ${cartItem.quantity}`;
//     cartContainer.appendChild(cartItemElement);

//     let mealPrice = meal.price * cartItem.quantity;
//     let currentPrice = parseFloat(priceElement.textContent.replace('$', '')) || 0;
//     priceElement.textContent = `$${(currentPrice + mealPrice).toFixed(2)}`;
// }

// displayCart(cart) {
//     document.createElement('div');
//     if (cart.items.length == 0) {
//         cartDiv.textContent = "The cart is empty.";
//         return;
//     }

//     console.log(`Total: $${cart.getTotal()}`);
// }