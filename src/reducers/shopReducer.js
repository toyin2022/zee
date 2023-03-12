const initialData = [
  {
    cart: [
      {
        id: 1,
        name: "toyin",
      },
    ],
  },
];
const shopReducer = (state = initialData, action) => {
  switch (action.type) {
    case "CART":
      return {
        ...state,
        cart: [...state.shop, action.payload],
      };

    default:
      return state;
  }
};

export default shopReducer;
