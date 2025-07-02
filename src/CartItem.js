class CartItem {
  constructor(product, selected_choices, quantity) {
    this.product = product;
    this.selected_choices = selected_choices; // A list of Choice objects
    this.quantity = quantity;
  }

  get totalPrice() {
    // (Base price + Extras) * Quantity
    const singleItemPrice = this.product.price + this.#calculateExtrasPrice();
    return singleItemPrice * this.quantity;
  }

  #calculateExtrasPrice() {
    let extraPrice = 0;
    if (this.selected_choices) {
      for (const choice of this.selected_choices) {
        extraPrice += choice.price; // Get the price of each choice
      }
    }
    return extraPrice;
  }
}

export default CartItem;