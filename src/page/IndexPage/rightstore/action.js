import {
    GET_ALL_RIGHT,
    SAVE_ALL_RIGHT,
    CREATE_RIGHT,
    SAVE_NEW_RIGHT,
    UPDATE_RIGHT,
    SAVE_UPDATE_RIGHT,
    DELETE_RIGHT,
    GET_DETAIL_RIGHT,
    SAVE_DETAIL_RIGHT,

    GET_MULTIPLE_RIGHT,
    SAVE_MULTIPLE_RIGHT,

    GET_FILTER_RIGHT,
    SAVE_FILTER_RIGHT

} from "./constants";

/** ---------------GET MULTIPLE RIGHT (EXTRA)------------- **/
export function filterRightAction(payload) {
    return { type: GET_FILTER_RIGHT, payload }
}

export function saveFilterRightAction(payload) {
    return { type: SAVE_FILTER_RIGHT, payload }
}

/** ---------------GET MULTIPLE RIGHT (EXTRA)------------- **/
export function getMultipleRightAction(payload) {
    return { type: GET_MULTIPLE_RIGHT, payload }
}

export function saveMultipleRightAction(payload) {
    return { type: SAVE_MULTIPLE_RIGHT, payload }
}
/** -------------------GET ALL RIGHT---------------------- **/
export function getAllRightAction(payload) {
    return { type: GET_ALL_RIGHT, payload }
}

export function saveAllRightAction(payload) {
    return { type: SAVE_ALL_RIGHT, payload }
}

export const asyncGetAllRightAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: GET_ALL_RIGHT, payload, resolve })
    );
/** -------------------CREATE RIGHT---------------------- **/

export function createRightAction(payload) {
    return { type: CREATE_RIGHT, payload }
}

export function saveNewRightAction(payload) {
    return { type: SAVE_NEW_RIGHT, payload }
}

export const asyncCreateRightAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: CREATE_RIGHT, payload, resolve })
    );

/** -------------------UPDATE RIGHT---------------------- **/
export function updateRightAction(payload) {
    return { type: UPDATE_RIGHT, payload }
}

export function saveUpdateRightAction(payload) {
    return { type: SAVE_UPDATE_RIGHT, payload }
}

export const asyncUpdateRightAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: UPDATE_RIGHT, payload, resolve })
    );

/** -------------------DELETE RIGHT---------------------- **/
export function deleteRightAction(payload) {
    return { type: DELETE_RIGHT, payload }
}

export const asyncDeleteRightAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: DELETE_RIGHT, payload, resolve })
    );

/** -------------------GET RIGHT DETAIL---------------------- **/
export function getDetailRightAction(payload) {
    return { type: GET_DETAIL_RIGHT, payload }
}

export function saveDetailRightAction(payload) {
    return { type: SAVE_DETAIL_RIGHT, payload }
}

export const asyncGetDetailRightAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: GET_DETAIL_RIGHT, payload, resolve })
    );