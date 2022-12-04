import {
    GET_ALL_MIDDLE,
    SAVE_ALL_MIDDLE,
    CREATE_MIDDLE,
    SAVE_NEW_MIDDLE,
    UPDATE_MIDDLE,
    SAVE_UPDATE_MIDDLE,
    DELETE_MIDDLE,
    GET_DETAIL_MIDDLE,
    SAVE_DETAIL_MIDDLE,

    GET_MULTIPLE_MIDDLE,
    SAVE_MULTIPLE_MIDDLE
} from "./constants";


export function getMultipleMiddleAction(payload) {
    return { type: GET_MULTIPLE_MIDDLE, payload }
}

export function saveMultipleMiddleAction(payload) {
    return { type: SAVE_MULTIPLE_MIDDLE, payload }
}
/** ----------------------------------------- **/
export function getAllMiddleAction(payload) {
    return { type: GET_ALL_MIDDLE, payload }
}

export function saveAllMiddleAction(payload) {
    return { type: SAVE_ALL_MIDDLE, payload }
}

export function createMiddleAction(payload) {
    return { type: CREATE_MIDDLE, payload }
}

export function saveNewMiddleAction(payload) {
    return { type: SAVE_NEW_MIDDLE, payload }
}

export const asyncCreateMiddleAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: CREATE_MIDDLE, payload, resolve })
    );

export function updateMiddleAction(payload) {
    return { type: UPDATE_MIDDLE, payload }
}

export function saveUpdateMiddleAction(payload) {
    return { type: SAVE_UPDATE_MIDDLE, payload }
}

export const asyncUpdateMiddleAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: UPDATE_MIDDLE, payload, resolve })
    );

export function deleteMiddleAction(payload) {
    return { type: DELETE_MIDDLE, payload }
}

export const asyncDeleteMiddleAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: DELETE_MIDDLE, payload, resolve })
    );

export function getDetailMiddleAction(payload) {
    return { type: GET_DETAIL_MIDDLE, payload }
}

export function saveDetailMiddleAction(payload) {
    return { type: SAVE_DETAIL_MIDDLE, payload }
}

export const asyncGetDetailMiddleAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: GET_DETAIL_MIDDLE, payload, resolve })
    );