import { USERS } from "./actionType";

const initialState = {
  data: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS:
      const { data, id} = action.payload;

      return {
        ...state,
        data: [
          ...state.data,
          {
            data:data,
            id: id,
          },
        ],
      };
  
    default:
      return state;
  }
};