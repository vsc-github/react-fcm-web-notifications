import {
} from "../actions/users";

export function users(state = {
    count: 0,
    type: 'none'
}, action) {
    switch (action.type) {
        default:
            return state;
    }
}