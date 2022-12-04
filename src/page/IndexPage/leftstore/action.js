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
    SAVE_MULTIPLE_LEFT,

    GET_FILTER_LEFT,
    SAVE_FILTER_LEFT

} from "./constants";

/** ---------------GET MULTIPLE LEFT (EXTRA)------------- **/
export function filterLeftAction(payload) {
    return { type: GET_FILTER_LEFT, payload }
}

export function saveFilterLeftAction(payload) {
    return { type: SAVE_FILTER_LEFT, payload }
}

/** ---------------GET MULTIPLE LEFT (EXTRA)------------- **/
export function getMultipleLeftAction(payload) {
    return { type: GET_MULTIPLE_LEFT, payload }
}

export function saveMultipleLeftAction(payload) {
    return { type: SAVE_MULTIPLE_LEFT, payload }
}
/** -------------------GET ALL LEFT---------------------- **/
export function getAllLeftAction(payload) {
    return { type: GET_ALL_LEFT, payload }
}

export function saveAllLeftAction(payload) {
    return { type: SAVE_ALL_LEFT, payload }
}

export const asyncGetAllLeftAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: GET_ALL_LEFT, payload, resolve })
    );
/** -------------------CREATE LEFT---------------------- **/

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

/** -------------------UPDATE LEFT---------------------- **/
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

/** -------------------DELETE LEFT---------------------- **/
export function deleteLeftAction(payload) {
    return { type: DELETE_LEFT, payload }
}

export const asyncDeleteLeftAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: DELETE_LEFT, payload, resolve })
    );

/** -------------------GET LEFT DETAIL---------------------- **/
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