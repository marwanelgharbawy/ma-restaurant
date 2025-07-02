class CartItem {
  constructor(product, selected_choices, quantity) {
    this.product = product;
    this.selected_choices = selected_choices; // A list of Choice objects
    this.quantity = quantity;
    this.totalPrice = calculateTotalPrice();
  }

  calculateTotalPrice() {
    // (Base price + Extras) * Quantity
    return (this.product.price + this.calculateExtraPrice) * this.quantity;
  }

  // Private method
  calculateExtraPrice() {
    if (this.selected_choices) {
      for (const choice of this.selected_choices) {
        singlePrice += choice.price; // Get the price of each choice
      }
    }
  }
}

export default CartItem;