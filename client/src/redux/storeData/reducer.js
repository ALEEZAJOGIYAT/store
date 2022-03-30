import { STORE_DATA } from "./actionType";

const initialState = {
  data: [],
};

export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_DATA:
      const { data} = action.payload;

      return {
        ...state,
        data: [
          ...state.data,
          {
            data:data,
          },
        ],
      };
  
    default:
      return state;
  }
};