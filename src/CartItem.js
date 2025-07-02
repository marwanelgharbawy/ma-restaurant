class CartItem {
  constructor(product, selectedChoices, quantity) {
    this.product = product;
    this.selectedChoices = selectedChoices; // A list of Choice objects
    this.quantity = quantity;
  }

  get totalPrice() {
    // (Base price + Extras) * Quantity
    const singleItemPrice = this.product.price + this.#calculateExtrasPrice();
    return singleItemPrice * this.quantity;
  }

  #calculateExtrasPrice() {
    let extraPrice = 0;
    if (this.selectedChoices) {
      for (const choice of this.selectedChoices) {
        extraPrice += choice.price; // Get the price of each choice
      }
    }
    return extraPrice;
  }
}

export default CartItem;