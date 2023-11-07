import {
  GET_BURGER_REQUEST,
  GET_BURGER_SUCCESS,
  GET_BURGER_FAILURE,
  GET_MUFFIN_REQUEST,
  GET_MUFFIN_SUCCESS,
  GET_MUFFIN_FAILURE,
  GET_CHICKENANDFISH_REQUEST,
  GET_CHICKENANDFISH_SUCCESS,
  GET_CHICKENANDFISH_FAILURE,
  GET_CRISPYCHICKEN_REQUEST,
  GET_CRISPYCHICKEN_SUCCESS,
  GET_CRISPYCHICKEN_FAILURE,
  GET_WRAPS_REQUEST,
  GET_WRAPS_SUCCESS,
  GET_WRAPS_FAILURE,
  GET_HAPPYMEAL_REQUEST,
  GET_HAPPYMEAL_SUCCESS,
  GET_HAPPYMEAL_FAILURE,
  GET_EXTRAVALUEMEAL_REQUEST,
  GET_EXTRAVALUEMEAL_SUCCESS,
  GET_EXTRAVALUEMEAL_FAILURE,
  GET_VALUEMEAL_REQUEST,
  GET_VALUEMEAL_SUCCESS,
  GET_VALUEMEAL_FAILURE,
  GET_DESSERTS_REQUEST,
  GET_DESSERTS_SUCCESS,
  GET_DESSERTS_FAILURE,
  GET_BEVERAGES_REQUEST,
  GET_BEVERAGES_SUCCESS,
  GET_BEVERAGES_FAILURE,
  GET_MCCAFE_REQUEST,
  GET_MCCAFE_SUCCESS,
  GET_MCCAFE_FAILURE,
  GET_FRIESANDSIDES_REQUEST,
  GET_FRIESANDSIDES_SUCCESS,
  GET_FRIESANDSIDES_FAILURE,
  REMOVE_FROM_CART,
  ADD_TO_CART,
  EMPTY_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./type";

const initialState = {
  burgers: [],
  muffins: [],
  chickenandfish: [],
  crispychicken: [],
  wraps: [],
  happymeals: [],
  evms: [],
  vms: [],
  desserts: [],
  beverages: [],
  mccafe: [],
  fas: [],
  addtocart: [],
  removefromcart: [],
  increasequantity: [],
  decreasequantity: [],
  loading: false,
  error: null,
};

export const burgerReducer = (state = initialState.burgers, action) => {
  console.log("data in reducer", action.payload);

  switch (action.type) {
    case GET_BURGER_REQUEST:
      return {
        ...state,
        loading: true,
        burgers: [],
      };
    case GET_BURGER_SUCCESS:
      return {
        ...state,
        loading: false,
        burgers: action.payload,
      };
    case GET_BURGER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const selectBurgers = (state) => state.burgers;

export const muffinReducer = (state = initialState.muffins, action) => {
  console.log("data in muffin reducer", action.payload);

  switch (action.type) {
    case GET_MUFFIN_REQUEST:
      return {
        ...state,
        loading: true,
        muffins: [],
      };
    case GET_MUFFIN_SUCCESS:
      return {
        ...state,
        loading: false,
        muffins: action.payload,
      };
    case GET_MUFFIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const selectMuffins = (state) => state.muffins;

export const chickenAndFishReducer = (
  state = initialState.chickenandfish,
  action
) => {
  console.log("data in muffin reducer", action.payload);

  switch (action.type) {
    case GET_CHICKENANDFISH_REQUEST:
      return {
        ...state,
        loading: true,
        chickenandfish: [],
      };
    case GET_CHICKENANDFISH_SUCCESS:
      return {
        ...state,
        loading: false,
        chickenandfish: action.payload,
      };
    case GET_CHICKENANDFISH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const selectchickenAndFish = (state) => state.chickenAndFishReducer;

export const crispyChickenReducer = (
  state = initialState.crispychicken,
  action
) => {
  console.log("data in muffin reducer", action.payload);

  switch (action.type) {
    case GET_CRISPYCHICKEN_REQUEST:
      return {
        ...state,
        loading: true,
        crispychicken: [],
      };
    case GET_CRISPYCHICKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        crispychicken: action.payload,
      };
    case GET_CRISPYCHICKEN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const selectcrispyChicken = (state) => state.crispyChickenReducer;

export const wrapsReducer = (state = initialState.wraps, action) => {
  console.log("data in muffin reducer", action.payload);

  switch (action.type) {
    case GET_WRAPS_REQUEST:
      return {
        ...state,
        loading: true,
        wraps: [],
      };
    case GET_WRAPS_SUCCESS:
      return {
        ...state,
        loading: false,
        wraps: action.payload,
      };
    case GET_WRAPS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const selectWraps = (state) => state.wrapsReducer;

export const happyMealReducer = (state = initialState.happymeals, action) => {
  console.log("data in happymeals reducer", action.payload);

  switch (action.type) {
    case GET_HAPPYMEAL_REQUEST:
      return {
        ...state,
        loading: true,
        happymeals: [],
      };
    case GET_HAPPYMEAL_SUCCESS:
      return {
        ...state,
        loading: false,
        happymeals: action.payload,
      };
    case GET_HAPPYMEAL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const selectHappyMeal = (state) => state.happyMealReducer;

export const evmReducer = (state = initialState.evms, action) => {
  console.log("data in evms reducer", action.payload);

  switch (action.type) {
    case GET_EXTRAVALUEMEAL_REQUEST:
      return {
        ...state,
        loading: true,
        evms: [],
      };
    case GET_EXTRAVALUEMEAL_SUCCESS:
      return {
        ...state,
        loading: false,
        evms: action.payload,
      };
    case GET_EXTRAVALUEMEAL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const selectEvm = (state) => state.evmReducer;

export const vmReducer = (state = initialState.vms, action) => {
  console.log("data in vms reducer", action.payload);

  switch (action.type) {
    case GET_VALUEMEAL_REQUEST:
      return {
        ...state,
        loading: true,
        vms: [],
      };
    case GET_VALUEMEAL_SUCCESS:
      return {
        ...state,
        loading: false,
        vms: action.payload,
      };
    case GET_VALUEMEAL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const selectVm = (state) => state.vmReducer;

export const dessertReducer = (state = initialState.desserts, action) => {
  console.log("data in desserts reducer", action.payload);

  switch (action.type) {
    case GET_DESSERTS_REQUEST:
      return {
        ...state,
        loading: true,
        desserts: [],
      };
    case GET_DESSERTS_SUCCESS:
      return {
        ...state,
        loading: false,
        desserts: action.payload,
      };
    case GET_DESSERTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const selectDessert = (state) => state.dessertReducer;

export const beverageReducer = (state = initialState.beverages, action) => {
  console.log("data in beverages reducer", action.payload);

  switch (action.type) {
    case GET_BEVERAGES_REQUEST:
      return {
        ...state,
        loading: true,
        beverages: [],
      };
    case GET_BEVERAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        beverages: action.payload,
      };
    case GET_BEVERAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const selectBeverage = (state) => state.beverageReducer;

export const mccafeReducer = (state = initialState.mccafe, action) => {
  console.log("data in mccafe reducer", action.payload);

  switch (action.type) {
    case GET_MCCAFE_REQUEST:
      return {
        ...state,
        loading: true,
        mccafe: [],
      };
    case GET_MCCAFE_SUCCESS:
      return {
        ...state,
        loading: false,
        mccafe: action.payload,
      };
    case GET_MCCAFE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const selectMccafe = (state) => state.mccafeReducer;

export const fasReducer = (state = initialState.fas, action) => {
  console.log("data in fas reducer", action.payload);

  switch (action.type) {
    case GET_FRIESANDSIDES_REQUEST:
      return {
        ...state,
        loading: true,
        fas: [],
      };
    case GET_FRIESANDSIDES_SUCCESS:
      return {
        ...state,
        loading: false,
        fas: action.payload,
      };
    case GET_FRIESANDSIDES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const selectFas = (state) => state.fasReducer;

function findObjectById(array, id) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      return array[i];
    }
  }
  return null;
}

export const cartRed = (state = initialState.addtocart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(initialState, 'state____statellllllll')
      let cart = findObjectById(initialState.addtocart, action?.payload);

      if (action?.payload?.quantity === undefined) {
        let quantity = cart?.quantity ? cart?.quantity + 1 : 1;
        return [...state, { id: action?.payload?._id, quantity }];
      }

      return [...state, action?.payload];

    case EMPTY_CART:
      return (state = []);

    case REMOVE_FROM_CART:
      return state.filter((item) => item?.id !== action.payload?.id);
    default:
      return state;
  }
};

export const removeCartRed = (state = initialState.removefromcart, action) => {
  switch (action.type) {
    // case REMOVE_FROM_CART:
    //   return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
};

export const selectRemoveCartRed = (state) => state.removefromcart;

export const increaseQuantityRed = (
  state = initialState.increasequantity,
  action
) => {
  switch (action.type) {
    case INCREASE_QUANTITY:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
      });
  }
};

export const decreaseQuantityRed = (
  state = initialState.decreasequantity,
  action
) => {
  switch (action.type) {
    case DECREASE_QUANTITY:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
      });
  }
};
