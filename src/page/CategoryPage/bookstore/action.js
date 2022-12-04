import {
    GET_ALL_BOOK,
    SAVE_ALL_BOOK,
    CREATE_BOOK,
    SAVE_NEW_BOOK,
    UPDATE_BOOK,
    SAVE_UPDATE_BOOK,
    DELETE_BOOK,
    GET_DETAIL_BOOK,
    SAVE_DETAIL_BOOK,

    GET_MULTIPLE_BOOK,
    SAVE_MULTIPLE_BOOK,

    GET_FILTER_BOOK,
    SAVE_FILTER_BOOK

} from "./constants";

/** ---------------GET MULTIPLE BOOK (EXTRA)------------- **/
export function filterBookAction(payload) {
    return { type: GET_FILTER_BOOK, payload }
}

export function saveFilterBookAction(payload) {
    return { type: SAVE_FILTER_BOOK, payload }
}

/** ---------------GET MULTIPLE BOOK (EXTRA)------------- **/
export function getMultipleBookAction(payload) {
    return { type: GET_MULTIPLE_BOOK, payload }
}

export function saveMultipleBookAction(payload) {
    return { type: SAVE_MULTIPLE_BOOK, payload }
}
/** -------------------GET ALL BOOK---------------------- **/
export function getAllBookAction(payload) {
    return { type: GET_ALL_BOOK, payload }
}

export function saveAllBookAction(payload) {
    return { type: SAVE_ALL_BOOK, payload }
}

export const asyncGetAllBookAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: GET_ALL_BOOK, payload, resolve })
    );
/** -------------------CREATE BOOK---------------------- **/

export function createBookAction(payload) {
    return { type: CREATE_BOOK, payload }
}

export function saveNewBookAction(payload) {
    return { type: SAVE_NEW_BOOK, payload }
}

export const asyncCreateBookAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: CREATE_BOOK, payload, resolve })
    );

/** -------------------UPDATE BOOK---------------------- **/
export function updateBookAction(payload) {
    return { type: UPDATE_BOOK, payload }
}

export function saveUpdateBookAction(payload) {
    return { type: SAVE_UPDATE_BOOK, payload }
}

export const asyncUpdateBookAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: UPDATE_BOOK, payload, resolve })
    );

/** -------------------DELETE BOOK---------------------- **/
export function deleteBookAction(payload) {
    return { type: DELETE_BOOK, payload }
}

export const asyncDeleteBookAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: DELETE_BOOK, payload, resolve })
    );

/** -------------------GET BOOK DETAIL---------------------- **/
export function getDetailBookAction(payload) {
    return { type: GET_DETAIL_BOOK, payload }
}

export function saveDetailBookAction(payload) {
    return { type: SAVE_DETAIL_BOOK, payload }
}

export const asyncGetDetailBookAction = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({ type: GET_DETAIL_BOOK, payload, resolve })
    );