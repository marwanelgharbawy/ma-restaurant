class Cart {

    constructor() {
        this.cartItems = []; // Empty array to hold items in the cart
    }

    addItem(item) {
        this.cartItems.push(item); // Add CartItem object to the Cart object
    }

    // TODO: If item already exists, increase count instead (must match condiments)
    // Idea: Create an ID for each item containing product name/ID and selected choices 

    removeItem(index) {
        if (index >= 0 && index < this.cartItems.length) {
            this.cartItems.splice(index, 1);
        }
    }

    get totalPrice() {
        let total = 0;
        for (const item of this.cartItems) {
            total += item.totalPrice;
        }
        return total;
    }

    // TODO: Apply discounts
}

export default Cart;