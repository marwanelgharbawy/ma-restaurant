class Category {
    constructor(name, meals) {
        this.name = name;
        // this.description = 'Food section here';
        this.meals = meals; // Array of meal objects
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getMeals() {
        return this.meals;
    }
}

export default Category;