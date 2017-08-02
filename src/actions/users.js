export const INCREMENT_USERS = "INCREMENT_USERS";
export const DECREMENT_USERS = "DECREMENT_USERS";
export const SET_USERS = "SET_USERS";

export function incrementUsersAction() {
  return {
    type: INCREMENT_USERS
  };
}

export function decrementUsersAction() {
  return {
    type: DECREMENT_USERS
  };
}

export function setUsers(count) {
  return {
    type: SET_USERS,
      count
  };
}