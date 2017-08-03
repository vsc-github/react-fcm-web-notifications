import axios from 'axios';

export const INCREMENT_USERS = "INCREMENT_USERS";
export const DECREMENT_USERS = "DECREMENT_USERS";
export const SET_USERS = "SET_USERS";
export const NOTIFICATION_SENT = "NOTIFICATION_SENT";

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

export function notificationSentStatusAction(status) {
  return {
    type: NOTIFICATION_SENT,
      status
  };
}

export function notifyMeAction(fcm) {

  return dispatch => {
      axios.get('http://localhost:8080/api/notify/'+fcm).then(res=>{
          dispatch(notificationSentStatusAction("Success"));
      }).catch((e) => {
          console.log("Notifying via fcm failed!!", e);
          dispatch(notificationSentStatusAction("Failed"));
          return { error: e }
      });
  }
}