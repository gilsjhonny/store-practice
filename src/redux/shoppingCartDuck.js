const initialState = {
  products: [],
};

// Actions
const ADD_OR_UPDATE = 'ADD_OR_UPDATE';
const REMOVE = 'REMOVE';

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_OR_UPDATE:
      let products;
      const productToAdd = action.payload.product;

      // Si consigue el producto con un .map
      if (state.products.find((p) => p.id === productToAdd.id)) {
        products = state.products.map((product) => {
          if (product.id === productToAdd.id) {
            return { ...product, qty: product.qty + action.payload.qty };
          }

          return product;
        });
        // Agregar o concatenar el producto al final del array
      } else {
        products = [...state.products, { ...productToAdd, qty: 1 }];
      }
      return { ...state, products };

    case REMOVE:
      const filteredProducts = state.products.filter(
        (p) => p.id !== action.payload.product.id,
      );

      return { ...state, products: filteredProducts };

    default:
      return state;
  }
}

// Action Creators
export function addOrUpdateProduct(product, qty = 1) {
  return { type: ADD_OR_UPDATE, payload: { product, qty } };
}

export function removeProduct(product) {
  return { type: REMOVE, payload: { product } };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget() {
//   return (dispatch) =>
//     get('/widget').then((widget) => dispatch(updateWidget(widget)));
// }
