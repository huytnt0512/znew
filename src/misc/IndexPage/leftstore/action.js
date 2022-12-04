import {
    GET_ALL_LEFT,
    SAVE_ALL_LEFT,
    CREATE_LEFT,
    SAVE_NEW_LEFT,
    UPDATE_LEFT,
    SAVE_UPDATE_LEFT,
    DELETE_LEFT,
    GET_DETAIL_LEFT,
    SAVE_DETAIL_LEFT,

    GET_MULTIPLE_LEFT,
    SAVE_MULTIPLE_LEFT
} from "./constants";


export function getMultipleLeftAction(payload) {
    return { type: GET_MULTIPLE_LEFT, payload }
}

export function saveMultipleLeftAction(payload) {
    return { type: SAVE_MULTIPLE_LEFT, payload }
}
/** ----------------------------------------- **/
export function getAllLeftAction(payload) {
    return { type: GET_ALL_LEFT, payload }
}

export function saveAllLeftAction(payload) {
    return { type: SAVE_ALL_LEFT, payload }
}

export function createLeftAction(payload) {
    return { type: CREATE_LEFT, payload }
}

export function saveNewLeftAction(payload) {
    return { type: SAVE_NEW_LEFT, payload }
}

export const asyncCreateLeftAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: CREATE_LEFT, payload, resolve })
    );

export function updateLeftAction(payload) {
    return { type: UPDATE_LEFT, payload }
}

export function saveUpdateLeftAction(payload) {
    return { type: SAVE_UPDATE_LEFT, payload }
}

export const asyncUpdateLeftAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: UPDATE_LEFT, payload, resolve })
    );

export function deleteLeftAction(payload) {
    return { type: DELETE_LEFT, payload }
}

export const asyncDeleteLeftAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: DELETE_LEFT, payload, resolve })
    );

export function getDetailLeftAction(payload) {
    return { type: GET_DETAIL_LEFT, payload }
}

export function saveDetailLeftAction(payload) {
    return { type: SAVE_DETAIL_LEFT, payload }
}

export const asyncGetDetailLeftAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: GET_DETAIL_LEFT, payload, resolve })
    );