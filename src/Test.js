import Meal from './Meal.js';
import Category from './Category.js';
import Choice from './Choice.js';
import CartItem from './CartItem.js';

// Simulate database data for meals and condiments
// Pizza condiments is an array of 
const Pepperoni = new Choice('Pepperoni', 2.99);
const Jalapeno = new Choice('Jalapeno', 0.99);
const Olives = new Choice('Olives', 1.49);
const Ketchup = new Choice('Ketchup', 0.49);
const Mustard = new Choice('Mustard', 0.49);

const pizza_condiments = [Pepperoni, Jalapeno, Olives, Ketchup, Mustard];

// Create some meal instances
const meal1 = new Meal('Maro Pizza', 'Standard pizza', pizza_condiments, 10.99);
const meal2 = new Meal('BBQ Chicken Pizza', 'No description', pizza_condiments, 14.99);
const meal3 = new Meal('Chicken Ranch Pizza', 'No description', pizza_condiments, 12.99);
const meals = [meal1, meal2, meal3];

const pizzaCategory = new Category('Pizzas', meals);

// Display the meals in the pizza category
console.log(`Category: ${pizzaCategory.name}\n\n`);
console.log('Meals:');
pizzaCategory.meals.forEach((meal) => {
    console.log(`- ${meal.name}: ${meal.description} - $${meal.price}`);
    console.log('  Condiments:');
    meal.options.forEach((condiment) => {
        console.log(`  - ${condiment.name}: $${condiment.price}`);
    });
    console.log("\n\n");
});