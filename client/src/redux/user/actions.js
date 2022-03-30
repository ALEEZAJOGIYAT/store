import { USERS, NEW_USERS } from "./actionType";

export const users = (data) => {
  return {
    type: USERS,
    payload: {
      data: data,
    },
  };
};

export const newUsers = (data) => {
  return {
    type: NEW_USERS,
    payload: {
      data: data,
    },
  };
};
