import { USER_ROLE } from "./actionType";

export const userRole = (role) => {
  return {
    type: USER_ROLE,
    payload: {
      role: role,
    },
  };
};
