import {
    CHECK_USER,
} from "./constants";

export function checkUserAction(payload) {
    return { type: CHECK_USER, payload }
}

export const asyncCheckUserAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: CHECK_USER, payload, resolve })
    );