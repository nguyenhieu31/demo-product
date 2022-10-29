export const actionType = {
  get_product: 'get_product',
  get_product_details: 'get_product_details',
  add_to_cart: 'add_to_cart'
}
export const rootReducer = (state, action) => {
  const { actionType, payload } = action;
  switch (actionType) {
    case actionType.get_product: {
      return {
        ...state,
        products: payload,
      };
    }
    case actionType.get_product_details: {
      return {
        ...state,
        product: payload,
      };
    }
    case actionType.add_to_cart: {
      const cart = state.cart;
      const product = cart.find(item => item.id === payload.id);
      if (product) {
        product.quantity++;
      } else {
        cart.push({ ...payload, quantity: 1 });
      }
      return {
        ...state,
        cart: cart,
      };
    }
    default:
      return state;
  }
};