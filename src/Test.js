import fs from 'fs';

// Import all classes in the current directory

// Dynamically import all JavaScript files in the current directory
const context = require.context('./', false, /\.js$/);

const Meal = new Meal('Pizza', 'Delicious cheese pizza', ['Ketchup', 'Mustard'], 10.99);

context.keys().forEach((file) => {
    if (file !== './Test.js') {
        const module = context(file);
        console.log(`Loaded: ${file}`, module);
    }
});