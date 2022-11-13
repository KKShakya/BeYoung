export default function reducer(state, action) {
  switch (action.type) {
    case "Add_to_cart": {
      return [...state, action.payload];
    }

    case "Remove_from_cart": {
      const cartAfter_remove = state.filter(
        (item) => item.subtitle !== action.payload
      );
      return cartAfter_remove;
    }
    case "Checkout": {
      return [];
    }
    default:
      return state;
  }
}
