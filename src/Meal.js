import Options from './Options.js';

class Meal {
    constructor(name, description, options, price) {
        this.name = name;
        this.description = description;
        this.options = options; // List of options for the meal, such as condiments list.
        this.price = price; // Base price
    }

    // Total price is calculated in the Cart class
}

export default Meal;