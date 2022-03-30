import { USERS } from "./actionType";

const initialState = {
  data: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS:
      const { data} = action.payload;

      return {
        // ...state,
        data: [
          // ...state.data,
          {
            data:data,
          },
        ],
      };
  
    default:
      return state;
  }
};