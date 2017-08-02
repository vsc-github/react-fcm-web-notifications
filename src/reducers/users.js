import {
    INCREMENT_USERS,
    DECREMENT_USERS,
    SET_USERS
} from "../actions/users";

export function users(state = {
    count: 0,
    type: 'none'
}, action) {
    switch (action.type) {
        case INCREMENT_USERS:
            return Object.assign({}, state, {
                count: ++state.count
            });
        case DECREMENT_USERS:
            return Object.assign({}, state, {
                count: --state.count
            });
        case SET_USERS:
            return Object.assign({}, state, {
                count: action.count
            });
        default:
            return state;
    }
}