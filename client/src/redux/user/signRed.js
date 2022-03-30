import { NEW_USERS } from "./actionType";

const initialState = {
  data: [],
};

export const signReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_USERS:
      const { data } = action.payload;

      return {
        // ...state,
        data: [
          // ...state.data,
          {
            data: data,
          },
        ],
      };

    default:
      return state;
  }
};
