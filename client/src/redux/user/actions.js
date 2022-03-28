import { USERS } from "./actionType";

export const users = (data) => {
  return {
    type: USERS,
    payload: {
      data:data
    },
  };
};
