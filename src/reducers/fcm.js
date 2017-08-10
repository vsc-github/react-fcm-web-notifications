import {
    FCM_TOKEN_GENERATED
} from "../actions/users";

export function fcm(state = {
    fcmToken: null
}, action) {
    switch (action.type) {

        case FCM_TOKEN_GENERATED:
            return Object.assign({},state,{
                fcmToken: action.fcmToken
            });

        default:
            return state;
    }
}