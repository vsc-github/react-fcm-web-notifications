import axios from 'axios';

export const NOTIFICATION_SENT = "NOTIFICATION_SENT";
export const FCM_TOKEN_GENERATED = "FCM_TOKEN_GENERATED";

export function updateFcmTokenAction(fcmToken) {
    return {
        type: FCM_TOKEN_GENERATED,
        fcmToken
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
        axios.get('http://localhost:8080/api/notify/' + fcm).then(res => {
            dispatch(notificationSentStatusAction("Success"));
        }).catch((e) => {
            console.log("Notifying via fcm failed!!", e);
            dispatch(notificationSentStatusAction("Failed"));
            return {error: e}
        });
    }
}

export function notifyMeWithDelayAction(fcm) {

    return dispatch => {
        axios.get('http://localhost:8080/api/notify-with-delay/' + fcm).then(res => {
            dispatch(notificationSentStatusAction("Success"));
        }).catch((e) => {
            console.log("Notifying via fcm failed!!", e);
            dispatch(notificationSentStatusAction("Failed"));
            return {error: e}
        });
    }
}