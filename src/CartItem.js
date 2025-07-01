class CartItem {
  constructor(product, selected_choices, quantity) {
    this.product = product;
    this.selected_choices = selected_choices;
    this.quantity = quantity;
  }

  get totalPrice() {
    let singlePrice = this.product.price;
    if (this.selected_choices) {
      for (const choice of this.selected_choices) {
        singlePrice += choice.price;
      }
    }
    return singlePrice * this.quantity;
  }
}

export default CartItem;