import CartActionTypes from "./action-types";

const initialState = {
  products: [],
  
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      // verificar se o produto já existe no carrinho
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      // se existir, incrementar a quantidade
      if (productIsAlreadyInCart) {
        return {
          state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      }

      // se não existir, adicionar o produto ao carrinho
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };

    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };

    case CartActionTypes.INCREASE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        }),
      };

    case CartActionTypes.DECREASE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload) {
            return { ...product, quantity: product.quantity - 1 };
          }
          return product;
        }),
      };

    default:
      return state;
  }
};

export default cartReducer;
